import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

function Step({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="text-center space-y-4">
      <div className="w-20 h-20 mx-auto bg-primary-container rounded-full flex items-center justify-center border-4 border-primary-fixed/20">
        <span className="material-symbols-outlined text-4xl" aria-hidden="true">
          {icon}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-lg">{label}</p>
      </div>
    </div>
  );
}

export function HowItWorks({ locale }: { locale: Locale }) {
  return (
    <section className="bg-primary text-white py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            {t(locale, landingCopy.how.title)}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {landingCopy.how.steps.map((s) => (
            <Step key={s.icon} icon={s.icon} label={locale === "en" ? s.en : s.vi} />
          ))}
        </div>
      </div>
    </section>
  );
}

