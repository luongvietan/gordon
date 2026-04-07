import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { LandingIcon } from "../ui/LandingIcon";

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section
      id="top"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center"
    >
      <div className="lg:col-span-6 space-y-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-tight tracking-tight">
            {t(locale, landingCopy.hero.headline)}
          </h1>
        </div>

        <div className="flex flex-col gap-1 max-w-xl">
          <p className="text-lg text-on-surface-variant">{t(locale, landingCopy.hero.subhead)}</p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#products"
            className="bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all"
          >
            {t(locale, landingCopy.hero.ctaExplore)}
            <LandingIcon name="arrow_right" size={18} className="text-white" />
          </a>
          <a
            href="#investment"
            className="bg-tertiary-fixed-dim text-primary px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:brightness-105 transition-all inline-flex items-center gap-2"
          >
            {t(locale, landingCopy.hero.ctaInvest)}
            <LandingIcon name="arrow_right" size={18} className="text-primary" />
          </a>
        </div>
      </div>

      <div className="lg:col-span-6 relative">
        <div className="rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
          {/* Using <img> for a simple local public asset. */}
          <img
            alt={t(locale, landingCopy.hero.imageAlt)}
            className="w-full h-full object-cover"
            src="/images/hero.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

