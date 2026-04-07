import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { LandingIcon } from "../ui/LandingIcon";

export function FundingCTA({ locale }: { locale: Locale }) {
  return (
    <section data-animate="funding" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      <div className="bg-primary text-white p-6 sm:p-10 lg:p-16 rounded-[2rem] space-y-8">
        <h2 data-anim="title" className="text-3xl sm:text-4xl lg:text-5xl font-black">
          {t(locale, landingCopy.funding.title)}
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 text-left">
          <div data-anim="card" className="border-l-2 border-primary-fixed/30 pl-5 sm:pl-6">
            <p className="text-sm font-bold uppercase tracking-widest text-primary-fixed-dim">
              {t(locale, landingCopy.funding.askLabel)}
            </p>
            <p className="text-3xl sm:text-4xl font-black">{landingCopy.funding.askValue}</p>
          </div>
          <div data-anim="card" className="border-l-2 border-primary-fixed/30 pl-5 sm:pl-6">
            <p className="text-sm font-bold uppercase tracking-widest text-primary-fixed-dim">
              {t(locale, landingCopy.funding.timelineLabel)}
            </p>
            <p className="text-3xl sm:text-4xl font-black">{landingCopy.funding.timelineValue}</p>
          </div>
          <div data-anim="card" className="border-l-2 border-primary-fixed/30 pl-5 sm:pl-6">
            <p className="text-sm font-bold uppercase tracking-widest text-primary-fixed-dim">
              {t(locale, landingCopy.funding.useLabel)}
            </p>
            <p className="text-xl font-bold">{t(locale, landingCopy.funding.useValue)}</p>
          </div>
        </div>

        <p data-anim="body" className="text-primary-fixed/90 font-semibold max-w-3xl mx-auto leading-relaxed">
          {t(locale, landingCopy.funding.extra)}
        </p>

        <div className="pt-8">
          <a
            href="#investment"
            data-anim="cta"
            className="inline-flex items-center gap-2 bg-tertiary-fixed-dim text-primary px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-black text-lg sm:text-xl hover:scale-105 transition-transform"
          >
            {t(locale, landingCopy.funding.cta)}
            <LandingIcon name="arrow_right" size={20} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}

