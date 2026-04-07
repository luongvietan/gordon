import Link from "next/link";
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

export function Footer({ locale }: { locale: Locale }) {
  const otherLocale: Locale = locale === "en" ? "vi" : "en";

  return (
    <footer className="bg-surface-container w-full mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="font-bold text-primary text-xl">{landingCopy.brand}</div>
          <p className="text-sm text-on-surface-variant font-headline">
            {t(locale, landingCopy.footer.tagline)}
          </p>
        </div>

        <div className="flex flex-col gap-2 font-headline text-sm">
          <p className="font-bold text-primary mb-2">{t(locale, landingCopy.footer.quickLinks)}</p>
          <Link className="text-on-surface-variant hover:underline transition-all" href={`/${locale}#top`}>
            Contact
          </Link>
          <Link className="text-on-surface-variant hover:underline transition-all" href={`/${locale}#top`}>
            Privacy
          </Link>
          <Link className="text-on-surface-variant hover:underline transition-all" href={`/${locale}#top`}>
            Terms
          </Link>
        </div>

        <div className="space-y-4 font-headline text-sm">
          <p className="font-bold text-primary">{t(locale, landingCopy.footer.language)}</p>
          <div className="flex gap-3">
            <span className="text-primary font-bold">{locale.toUpperCase()}</span>
            <span className="text-on-surface-variant">|</span>
            <Link className="text-on-surface-variant hover:underline" href={`/${otherLocale}`}>
              {otherLocale.toUpperCase()}
            </Link>
          </div>
          <p className="text-on-surface-variant mt-8">
            {landingCopy.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

