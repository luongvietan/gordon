import Link from "next/link";
import Image from "next/image";
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

export function Footer({ locale }: { locale: Locale }) {
  const otherLocale: Locale = locale === "en" ? "vi" : "en";

  return (
    <footer className="bg-surface-container w-full mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Link href={`/${locale}#top`} aria-label={landingCopy.brand} className="inline-flex">
            <Image
              src="/brand/logo.png"
              alt={landingCopy.brand}
              width={180}
              height={60}
              className="h-11 w-auto"
            />
          </Link>
          <p className="text-sm text-on-surface-variant font-headline">
            {t(locale, landingCopy.footer.tagline)}
          </p>
          <p className="text-sm text-on-surface-variant/90 font-headline max-w-sm">
            {t(locale, landingCopy.footer.subtagline)}
          </p>
        </div>

        <div className="flex flex-col gap-2 font-headline text-sm">
          <p className="font-bold text-primary mb-2">{t(locale, landingCopy.footer.quickLinks)}</p>
          <Link className="text-on-surface-variant hover:underline transition-all" href={`/${locale}#overview`}>
            {t(locale, landingCopy.footer.links.overview)}
          </Link>
          <Link className="text-on-surface-variant hover:underline transition-all" href={`/${locale}#products`}>
            {t(locale, landingCopy.footer.links.product)}
          </Link>
          <Link className="text-on-surface-variant hover:underline transition-all" href={`/${locale}#economics`}>
            {t(locale, landingCopy.footer.links.economics)}
          </Link>
          <Link className="text-on-surface-variant hover:underline transition-all" href={`/${locale}#market`}>
            {t(locale, landingCopy.footer.links.market)}
          </Link>
          <Link className="text-on-surface-variant hover:underline transition-all" href={`/${locale}#investment`}>
            {t(locale, landingCopy.footer.links.investment)}
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

