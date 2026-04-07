import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

function Metric({
  value,
  title,
  highlight,
}: {
  value: string;
  title: string;
  highlight?: boolean;
}) {
  return (
    <div
      data-anim="card"
      className={
        highlight
          ? "bg-tertiary-fixed-dim p-8 rounded-xl text-center shadow-md"
          : "bg-surface-container-lowest p-8 rounded-xl text-center shadow-sm"
      }
    >
      <p className="text-4xl font-black text-primary mb-2">{value}</p>
      <p className="font-bold text-sm">{title}</p>
    </div>
  );
}

export function ROIInvestment({ locale }: { locale: Locale }) {
  return (
    <section
      id="investment"
      data-animate="investment"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-surface-container-low rounded-xl mb-16 sm:mb-24"
    >
      <div className="text-center mb-16">
        <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary">
          {t(locale, landingCopy.roi.title)}
        </h2>
        <p data-anim="subtitle" className="text-on-surface-variant">
          {t(locale, landingCopy.roi.subtitle)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {landingCopy.roi.metrics.map((m) => (
          <Metric
            key={m.value}
            value={m.value}
            title={t(locale, m.title)}
            highlight={"highlight" in m ? m.highlight : undefined}
          />
        ))}
      </div>
    </section>
  );
}

