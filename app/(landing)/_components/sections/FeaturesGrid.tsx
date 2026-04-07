import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
      <span className="material-symbols-outlined text-primary text-3xl mb-4" aria-hidden="true">
        {icon}
      </span>
      <p className="font-bold text-lg">{title}</p>
      <p className="text-sm text-secondary">{desc}</p>
    </div>
  );
}

export function FeaturesGrid({ locale }: { locale: Locale }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-black text-primary mb-10 sm:mb-12 text-center">
        {t(locale, landingCopy.features.title)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {landingCopy.features.cards.map((c) => (
          <FeatureCard
            key={c.icon}
            icon={c.icon}
            title={t(locale, c.title)}
            desc={t(locale, c.desc)}
          />
        ))}
      </div>
    </section>
  );
}

