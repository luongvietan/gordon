import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 py-3 border-b border-outline-variant/20">
      <p className="text-on-surface-variant">{label}</p>
      <p className="font-black text-primary whitespace-nowrap">{value}</p>
    </div>
  );
}

export function FinancialModel({ locale }: { locale: Locale }) {
  return (
    <section
      id="economics"
      data-animate="economics"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <div className="bg-surface-container-low rounded-2xl p-6 sm:p-10 lg:p-12 border border-outline-variant/15">
        <div className="flex flex-col gap-3 mb-8">
          <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary">
            {t(locale, landingCopy.financialModel.title)}
          </h2>
          <p data-anim="subtitle" className="text-on-surface-variant">
            {t(locale, landingCopy.financialModel.note)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div
            data-anim="card"
            className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15"
          >
            {landingCopy.financialModel.rows.slice(0, 5).map((r) => (
              <Row key={t(locale, r.label)} label={t(locale, r.label)} value={r.value} />
            ))}
          </div>
          <div
            data-anim="card"
            className="bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/15"
          >
            {landingCopy.financialModel.rows.slice(5).map((r) => (
              <Row key={t(locale, r.label)} label={t(locale, r.label)} value={r.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

