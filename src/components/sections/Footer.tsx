import Logo from "@/components/brand/Logo";

const SOCIALS = [
  { label: "Contact", href: "/#book-demo", icon: "mail" },
  { label: "WhatsApp", href: "/#book-demo", icon: "whatsapp" },
  { label: "Instagram", href: "/#book-demo", icon: "instagram" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-alt px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Logo />
            <p className="mt-5 text-[15px] leading-relaxed font-medium text-ink-soft">
              A Division of NW Overseas Group. Aesthetic technology for doctors
              and clinics across India.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-line bg-surface px-4 py-2 text-[11px] font-extrabold tracking-[0.12em] text-ink-soft uppercase">
              <span className="h-2 w-2 shrink-0 rounded-full bg-brand-blue" />
              Authorised MShape provider
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex items-center gap-2 rounded-full border-2 border-line bg-surface px-4 py-2.5 text-[14px] font-bold text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                <Icon name={social.icon} />
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-line pt-5 text-[13px] font-medium text-ink-faint sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <p>© {new Date().getFullYear()} NW Aesthetics. All rights reserved.</p>
          <a
            href="/privacy-policy"
            className="font-semibold transition-colors duration-200 hover:text-accent"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

function Icon({ name }: { name: (typeof SOCIALS)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      {name === "mail" && (
        <path
          d="M3.5 6.5h17v11h-17v-11Zm0 .5 8.5 6 8.5-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {name === "whatsapp" && (
        <path
          fill="currentColor"
          d="M12.04 2.5a9.4 9.4 0 0 0-8.1 14.1L2.5 21.5l5-1.3a9.4 9.4 0 1 0 4.54-17.7Zm0 1.7a7.7 7.7 0 1 1-3.9 14.34l-.28-.16-2.96.77.79-2.88-.18-.3A7.7 7.7 0 0 1 12.04 4.2Zm-3.5 3.86c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.6c.13.18 1.75 2.79 4.3 3.8 2.12.83 2.55.67 3.01.63.46-.04 1.49-.6 1.7-1.2.21-.58.21-1.08.15-1.19-.07-.1-.24-.16-.5-.29-.25-.13-1.49-.73-1.72-.81-.23-.09-.4-.13-.56.12-.17.25-.65.81-.79.98-.15.16-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.01-.38.11-.5.11-.12.25-.3.37-.44.12-.15.16-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.55-1.35-.76-1.85-.2-.48-.4-.42-.55-.43h-.47Z"
        />
      )}
      {name === "instagram" && (
        <>
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="3.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="16.9" cy="7.1" r="1.2" fill="currentColor" />
        </>
      )}
    </svg>
  );
}
