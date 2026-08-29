# Asset drop-in list

Every slot below already has its layout, aspect ratio and styling finished.
Save a file at the exact path and it appears — **no code changes needed**.
Until then each slot renders an on-brand placeholder instead of a broken image.

## Logo — DONE

| Path | Notes |
|---|---|
| `public/images/logo.png` | ✅ In place. Generated from `public/nwlogo.png`: cropped to the artwork bounds and resized to 400×242 (1.2 MB → 79 KB), transparent background preserved. The vector fallback in `src/components/brand/LogoMark.tsx` is now only a safety net. |

Brand colours are sampled from this file: violet `#3b027a`, azure `#0170cc`.
To regenerate after a logo change, re-crop/resize the source and overwrite
this path — no code change needed.

> `public/nwlogo.png` and `public/nlogo.png` are the 1.2 MB originals and are
> duplicates of each other. Nothing references them; they are still served
> publicly, so delete both once you're happy with the optimised logo.

## Product

| Path | Aspect | Used in |
|---|---|---|
| `public/images/mshape-machine.jpg` | 4:5 portrait | Hero |
| `public/images/launch-event.jpg` | 21:9 wide | We Help You Fill It |

## Clinic logos

| Path | Aspect |
|---|---|
| `public/images/clinics/zennara-logo.png` | wide, transparent |
| `public/images/clinics/ekisa-logo.png` | wide, transparent |
| `public/images/clinics/face-glow-logo.png` | wide, transparent |

## Clinic photos (case studies)

| Path | Aspect |
|---|---|
| `public/images/clinics/zennara.jpg` | 16:10 |
| `public/images/clinics/ekisa.jpg` | 16:10 |
| `public/images/clinics/face-glow.jpg` | 16:10 |

## Video posters

| Path | Aspect |
|---|---|
| `public/images/video-how-it-works.jpg` | 4:5 |
| `public/images/see-it-doctors.jpg` | 3:4 |
| `public/images/see-it-treatment.jpg` | 3:4 |

## Before & after

| Path | Aspect |
|---|---|
| `public/images/before-after-before.jpg` | 3:2 |
| `public/images/before-after-after.jpg` | 3:2 |

## Videos

| Path |
|---|
| `public/videos/how-mshape-works.mp4` |
| `public/videos/doctor-videos.mp4` |
| `public/videos/treatment-demo.mp4` |
