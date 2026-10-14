import Logo from "@/components/brand/Logo";

/**
 * Slim footer for the product quote pages: the logo and the privacy policy
 * link only. The link stays because the pages collect phone numbers.
 */
export default function LpFooter({
  privacyHref,
}: {
  /** The product's own policy, e.g. "/nucleoskin/privacy-policy". */
  privacyHref: string;
}) {
  return (
    <footer className="border-t border-line bg-surface-alt px-4 pt-8 pb-24 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-3 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">
        <Logo />
        <a
          href={privacyHref}
          className="-mx-2 inline-flex min-h-11 items-center px-2 text-[14px] font-semibold text-ink-faint transition-colors duration-200 hover:text-accent"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
