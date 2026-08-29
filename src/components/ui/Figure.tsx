import Image from "next/image";

/**
 * The single way an image is framed on this page.
 *
 * Every asset is boxed by an aspect ratio (never by its own height), so a row
 * of images always lines up regardless of the source dimensions:
 *   - `cover`   for photography that should fill the frame (edge to edge)
 *   - `contain` for the studio product shots, which are cut out on white and
 *               would lose the column or the applicator shelf if cropped
 */
export default function Figure({
  src,
  alt,
  width,
  height,
  sizes,
  ratio = "aspect-square",
  fit = "cover",
  tone = "alt",
  priority = false,
  rounded = "rounded-xl",
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  /** Intrinsic size of the file — keeps the layout stable before it loads. */
  width: number;
  height: number;
  sizes: string;
  /** Tailwind aspect utility for the frame. */
  ratio?: string;
  fit?: "cover" | "contain";
  /** Backdrop behind a `contain` image. */
  tone?: "alt" | "surface" | "sunken";
  priority?: boolean;
  rounded?: string;
  className?: string;
  imgClassName?: string;
}) {
  const backdrop =
    tone === "surface"
      ? "bg-surface"
      : tone === "sunken"
        ? "bg-surface-sunken"
        : "bg-surface-alt";

  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden border border-line ${rounded} ${backdrop} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className={`absolute inset-0 h-full w-full ${
          fit === "contain" ? "object-contain p-4 sm:p-6" : "object-cover"
        } ${imgClassName}`}
      />
    </div>
  );
}
