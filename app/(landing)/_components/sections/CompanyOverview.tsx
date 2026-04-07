import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

export function CompanyOverview({ locale }: { locale: Locale }) {
  return (
    <section
      id="overview"
      data-animate="overview"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6 sm:p-10 lg:p-12">
        <p data-anim="subtitle" className="text-sm font-bold tracking-widest uppercase text-tertiary mb-3">
          {t(locale, landingCopy.company.kicker)}
        </p>
        <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary mb-4">
          {t(locale, landingCopy.company.title)}
        </h2>
        <p data-anim="body" className="text-on-surface-variant text-lg leading-relaxed max-w-4xl">
          {t(locale, landingCopy.company.body)}
        </p>
      </div>
    </section>
  );
}

