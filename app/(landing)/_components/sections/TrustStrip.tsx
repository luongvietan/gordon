import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

function TrustItem({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center text-primary-fixed">
        <span className="material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      </div>
      <div>
        <p className="font-bold text-primary">{title}</p>
      </div>
    </div>
  );
}

export function TrustStrip({ locale }: { locale: Locale }) {
  return (
    <section className="bg-surface-container py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {landingCopy.trust.map((item) => (
          <TrustItem
            key={item.icon}
            icon={item.icon}
            title={t(locale, item.title)}
          />
        ))}
      </div>
    </section>
  );
}

