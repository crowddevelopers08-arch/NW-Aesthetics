import Figure from "./Figure";

/**
 * A framed image with its caption underneath, on a bordered card.
 * Same footprint everywhere it is used, so a row of tiles lines up.
 */
export default function ImageTile({
  src,
  alt,
  width,
  height,
  sizes,
  title,
  /** Default matches the square source art, so nothing is cropped. */
  ratio = "aspect-square",
  fit = "cover",
  tone = "alt",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  title: string;
  ratio?: string;
  fit?: "cover" | "contain";
  tone?: "alt" | "surface" | "sunken";
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface">
      <Figure
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        ratio={ratio}
        fit={fit}
        tone={tone}
        rounded="rounded-none"
        className="border-0 border-b border-line"
      />

      <p className="px-4 py-4 text-[16px] font-bold text-ink-strong sm:px-5 sm:text-[17px]">
        {title}
      </p>
    </div>
  );
}
