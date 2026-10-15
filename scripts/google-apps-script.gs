/* ============================================================
   NW Aesthetics — Google Apps Script (lead sheet)

   Accepts lead payloads from `src/app/api/submit-lead/route.ts`:
     { timestamp, name, email, phone, clinic, city,
       role, contouring, interest, profession, product, source, sheetTab }

   Every landing page writes to its own tab:
     MShape Leads         ← home page demo form   (sheetTab omitted/default)
     NucleoSkin Leads     ← /nucleoskin quote form
     Pink Intimate Leads  ← /pink-intimate quote form

   `sheetTab` must be one of TABS below; anything else falls back to
   MShape Leads, so a tampered request can't create stray tabs.

   Rows are written by header name instead of fixed column position, so a
   tab tolerates extra manual columns (e.g. "Status", "Notes") and
   reordered columns without breaking submissions.

   ── Setup ───────────────────────────────────────────────────
   1. Open the target Google Sheet → Extensions → Apps Script.
   2. Replace everything in Code.gs with this file, save.
   3. Run `setupSheets` once and approve the permission prompt.
      It creates any missing tab and leaves existing data untouched.
   4. Deploy → Manage deployments → edit the existing Web app →
        Version: New version → Deploy
      (Editing keeps the same /exec URL. A brand-new deployment gives a
       new URL, which must then go into GOOGLE_SHEETS_WEBHOOK_URL.)
        Execute as:      Me
        Who has access:  Anyone
   5. Optional: run `testNucleoSkin` / `testPinkIntimate` to drop a test
      row into each tab, then delete those rows.
   ============================================================ */

var DEFAULT_TAB = 'MShape Leads';

/** One entry per landing page. Headers are the column order for new tabs. */
var TABS = {
  'MShape Leads': {
    color: '#3b027a',
    headers: [
      'Timestamp', 'Name', 'Email', 'Phone', 'Clinic', 'City',
      'Decision Maker', 'Offers Contouring', 'Wants', 'Product', 'You Are', 'Source'
    ],
    widths: [170, 170, 220, 130, 190, 130, 140, 150, 140, 200, 170, 260],
    center: ['Phone', 'Decision Maker', 'Offers Contouring', 'Wants']
  },
  'NucleoSkin Leads': {
    color: '#074e4c',
    headers: ['Timestamp', 'Name', 'Phone', 'Clinic', 'City', 'You Are', 'Product', 'Source'],
    widths: [170, 170, 130, 200, 140, 190, 210, 300],
    center: ['Phone', 'You Are']
  },
  'Pink Intimate Leads': {
    color: '#7d0043',
    headers: ['Timestamp', 'Name', 'Phone', 'Clinic', 'City', 'You Are', 'Product', 'Source'],
    widths: [170, 170, 130, 200, 140, 190, 210, 300],
    center: ['Phone', 'You Are']
  }
};

function authorize() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log('Authorized: ' + ss.getName());
}

function doGet() {
  return _json({ status: 'NW Aesthetics lead API is live', tabs: Object.keys(TABS) });
}

function doPost(e) {
  // Two leads landing in the same second must not share a row.
  var lock = LockService.getScriptLock();
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return _json({ error: 'Empty request body' });
    }

    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var ts = data.timestamp || Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy, hh:mm:ss a');
    var tabName = Object.prototype.hasOwnProperty.call(TABS, data.sheetTab) ? data.sheetTab : DEFAULT_TAB;

    lock.waitLock(20000);
    var sheet = getOrCreateLeadSheet(ss, tabName);
    var row = appendLeadRow(sheet, tabName, data, ts);
    SpreadsheetApp.flush();

    return _json({ success: true, tab: tabName, row: row });
  } catch (err) {
    return _json({ error: err.toString() });
  } finally {
    try { lock.releaseLock(); } catch (ignore) {}
  }
}

/** Run once from the editor. Creates any missing tab; never touches data. */
function setupSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(TABS).forEach(function (tabName) {
    var sheet = ss.getSheetByName(tabName);
    if (!sheet) {
      createLeadSheet(ss, tabName);
      Logger.log('Created: ' + tabName);
    } else {
      _ensureHeaders(sheet, tabName);
      Logger.log('OK: ' + tabName);
    }
  });
  Logger.log('setupSheets complete.');
}

/* ---------------- tab creation ---------------- */

function createLeadSheet(ss, tabName) {
  var cfg = TABS[tabName];
  var sheet = ss.insertSheet(tabName);
  sheet.getRange(1, 1, 1, cfg.headers.length).setValues([cfg.headers]);
  _styleHeader(sheet, cfg.headers.length, cfg.color);
  _setWidths(sheet, cfg.widths);
  sheet.setFrozenRows(1);
  _phoneAsText(sheet, cfg.headers);
  _addFilter(sheet, cfg.headers.length);
  return sheet;
}

function getOrCreateLeadSheet(ss, tabName) {
  return ss.getSheetByName(tabName) || createLeadSheet(ss, tabName);
}

/**
 * For a tab that already exists: give it a header row if it is empty, and
 * append any of this tab's headers it is missing (e.g. "Product" and
 * "You Are" on an older MShape tab) at the end, so no data moves.
 */
function _ensureHeaders(sheet, tabName) {
  var cfg = TABS[tabName];

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, cfg.headers.length).setValues([cfg.headers]);
    _styleHeader(sheet, cfg.headers.length, cfg.color);
    _setWidths(sheet, cfg.widths);
    sheet.setFrozenRows(1);
    _phoneAsText(sheet, cfg.headers);
    _addFilter(sheet, cfg.headers.length);
    return;
  }

  var existing = _headers(sheet);
  var missing = cfg.headers.filter(function (h) { return existing.indexOf(h) === -1; });
  if (!missing.length) return;

  // A filter range can't grow, so drop it and re-create it over all columns.
  var filter = sheet.getFilter();
  if (filter) filter.remove();

  var start = existing.length + 1;
  sheet.getRange(1, start, 1, missing.length).setValues([missing]);
  _styleHeader(sheet, start + missing.length - 1, cfg.color);
  _addFilter(sheet, start + missing.length - 1);
  Logger.log('Added columns to ' + tabName + ': ' + missing.join(', '));
}

/* ---------------- row writing ---------------- */

function appendLeadRow(sheet, tabName, data, ts) {
  var cfg = TABS[tabName];

  if (sheet.getLastRow() === 0) _ensureHeaders(sheet, tabName);

  var values = {
    'Timestamp': ts,
    'Name': data.name || '',
    'Email': data.email || '',
    'Phone': data.phone ? String(data.phone) : '',
    'Clinic': data.clinic || '',
    'City': data.city || '',
    'Decision Maker': data.role || '',
    'Offers Contouring': data.contouring || '',
    'Wants': data.interest || '',
    'Product': data.product || '',
    'You Are': data.profession || '',
    'Source': data.source || ''
  };

  var headers = _headers(sheet);
  var row = headers.map(function (h) {
    return Object.prototype.hasOwnProperty.call(values, h) ? values[h] : '';
  });

  var rowIndex = sheet.getLastRow() + 1;
  var range = sheet.getRange(rowIndex, 1, 1, headers.length);

  // Phone stays text, so a number is never shown as 9.87E+09.
  var phoneCol = headers.indexOf('Phone');
  if (phoneCol !== -1) sheet.getRange(rowIndex, phoneCol + 1).setNumberFormat('@');

  range.setValues([row]);
  _styleRow(sheet, rowIndex, headers.length);
  _centerColumns(sheet, headers, rowIndex, cfg.center);

  return rowIndex;
}

/* ---------------- helpers ---------------- */

function _headers(sheet) {
  var lastCol = sheet.getLastColumn();
  if (lastCol === 0) return [];
  return sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(function (h) {
    return String(h).trim();
  });
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function _styleHeader(sheet, colCount, bgColor) {
  sheet.getRange(1, 1, 1, colCount)
    .setBackground(bgColor)
    .setFontColor('#ffffff')
    .setFontWeight('bold')
    .setFontSize(11)
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle');
  sheet.setRowHeight(1, 42);
}

function _styleRow(sheet, rowIndex, colCount) {
  var row = sheet.getRange(rowIndex, 1, 1, colCount);
  row.setBackground(rowIndex % 2 === 0 ? '#f6f7fa' : '#ffffff')
    .setFontColor('#14111f')
    .setFontSize(10)
    .setVerticalAlignment('middle')
    .setHorizontalAlignment('left');
  sheet.setRowHeight(rowIndex, 36);
  row.setBorder(false, false, true, false, false, false, '#e3e6ef', SpreadsheetApp.BorderStyle.SOLID);
}

function _setWidths(sheet, widths) {
  widths.forEach(function (w, i) { sheet.setColumnWidth(i + 1, w); });
}

function _phoneAsText(sheet, headers) {
  var idx = headers.indexOf('Phone');
  if (idx !== -1) sheet.getRange(2, idx + 1, sheet.getMaxRows() - 1, 1).setNumberFormat('@');
}

function _addFilter(sheet, colCount) {
  try {
    if (!sheet.getFilter()) sheet.getRange(1, 1, Math.max(sheet.getLastRow(), 1), colCount).createFilter();
  } catch (err) {
    Logger.log('Filter skipped on ' + sheet.getName() + ': ' + err);
  }
}

function _centerColumns(sheet, headers, rowIndex, names) {
  (names || []).forEach(function (name) {
    var idx = headers.indexOf(name);
    if (idx !== -1) sheet.getRange(rowIndex, idx + 1).setHorizontalAlignment('center');
  });
}

/* ---------------- manual tests (run from the editor) ---------------- */

function _testPost(payload) {
  var res = doPost({ postData: { contents: JSON.stringify(payload) } });
  Logger.log(res.getContent());
}

function testNucleoSkin() {
  _testPost({
    name: 'Test Lead', phone: '9876543210', clinic: 'Test Clinic', city: 'Mumbai',
    profession: 'Dermatologist', product: 'NucleoSkin PDRN Booster',
    source: 'https://example.com/nucleoskin', sheetTab: 'NucleoSkin Leads'
  });
}

function testPinkIntimate() {
  _testPost({
    name: 'Test Lead', phone: '9876543210', clinic: 'Test Clinic', city: 'Delhi',
    profession: 'Gynaecologist', product: 'Pink Intimate Peel',
    source: 'https://example.com/pink-intimate', sheetTab: 'Pink Intimate Leads'
  });
}
