import Section, { Heading } from "@/components/ui/Section";
import Figure from "@/components/ui/Figure";
import ImageTile from "@/components/ui/ImageTile";
import Reveal from "@/components/ui/Reveal";

/** MShape's own treatment and device photography. */
const GALLERY = [
  {
    src: "/images/brand/face-body-all-at-once.png",
    alt: "MShape treats face and body in the same session",
  },
  {
    src: "/images/brand/shape-your-face.png",
    alt: "MShape face treatment: eyebrow lift, face muscle contouring, double chin reduction",
  },
  {
    src: "/images/brand/shape-your-body.png",
    alt: "MShape body treatment: muscle volume, fat reduction, total body reshaping",
  },
  {
    src: "/images/brand/technologies.jpg",
    alt: "The MShape console with its applicators docked in the tray",
  },
  {
    src: "/images/brand/supertraining.jpg",
    alt: "Controlled supertraining with MShape",
  },
  { src: "/images/brand/back-tone.jpg", alt: "MShape tones and reshapes the back" },
  {
    src: "/images/brand/body-regenerate.jpg",
    alt: "MShape trains and tones the body",
  },
  { src: "/images/brand/defines-the-body.jpg", alt: "MShape defines the body" },
  {
    src: "/images/brand/muscles-shape-you.jpg",
    alt: "MShape: let your muscles shape you",
  },
  { src: "/images/brand/full-stasis.jpg", alt: "A body in full stasis with MShape" },
  {
    src: "/images/brand/legs-tone.jpg",
    alt: "MShape tones and shapes thighs and calves",
  },
  {
    src: "/images/brand/definisci-il-tuo-corpo.jpg",
    alt: "MShape defines the body",
  },
];

export default function SeeIt() {
  return (
    <Section id="see-it">
      <Reveal className="text-center">
        <Heading className="mx-auto max-w-2xl">See it</Heading>
      </Reveal>

      <div className="mx-auto mt-7 grid max-w-4xl gap-4 sm:mt-10 sm:grid-cols-2">
        <Reveal className="h-full">
          <ImageTile
            src="/images/brand/mshape-energy.jpg"
            alt="The MShape console in use during a body treatment"
            width={1000}
            height={1000}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            title="The machine"
          />
        </Reveal>

        <Reveal delay={90} className="h-full">
          <ImageTile
            src="/images/brand/mshape-face.png"
            alt="MShape face treatment with the face applicators and the console"
            width={1080}
            height={1080}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            title="The treatment"
          />
        </Reveal>

      </div>

      {/* treatment gallery */}
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {GALLERY.map((shot, i) => (
          <Reveal key={shot.src} delay={(i % 4) * 70} className="min-w-0">
            <Figure
              src={shot.src}
              alt={shot.alt}
              width={1000}
              height={1000}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              ratio="aspect-square"
              tone="surface"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
