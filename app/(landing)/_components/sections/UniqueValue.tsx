import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

function BulletCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/15 shadow-sm">
      <p className="font-black text-primary mb-2">{title}</p>
      <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
    </div>
  );
}

export function UniqueValue({ locale }: { locale: Locale }) {
  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4">
          {t(locale, landingCopy.valueProp.title)}
        </h2>
        <p className="text-on-surface-variant text-lg max-w-3xl mx-auto">
          {t(locale, landingCopy.valueProp.intro)}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {landingCopy.valueProp.bullets.map((b) => (
          <BulletCard
            key={t(locale, b.title)}
            title={t(locale, b.title)}
            desc={t(locale, b.desc)}
          />
        ))}
      </div>
    </section>
  );
}

