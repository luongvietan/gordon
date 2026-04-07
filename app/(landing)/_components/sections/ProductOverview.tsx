import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

function StatCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-4 bg-surface-container-low rounded-lg">
      <p className="text-primary font-bold">{title}</p>
      <p className="text-xs text-on-surface-variant">{subtitle}</p>
    </div>
  );
}

export function ProductOverview({ locale }: { locale: Locale }) {
  return (
    <section
      id="products"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
    >
      <div className="order-2 lg:order-1">
        <img
          alt="Product Details"
          className="w-full rounded-xl shadow-xl aspect-square object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP6NwDQgqyILx4pVVzBPYYlWbhxJS18roXQHuJqGpTqnHpk-aiwHcQSAYH1qHYdGVHGkFVi6RmuU6ogLIspzxKll4E9Ita4U_gcFngYLjvewIQlTzuYG3Xsz7ZwdewLxtt1lHBzERtmy4wXMlNG6isPTmX1S8d8EsE2LeBMgijOQIBT8b9S2kv9gatKtSFHDUQN7mnGf24vxqAs1hP-rQ5bgSkYRptszQlncJTPRkaWgZhft6bd3TbC9iNPvZLyPLr22wLx-zzcYVG"
        />
      </div>

      <div className="order-1 lg:order-2 space-y-6">
        <span className="text-tertiary font-bold tracking-widest uppercase text-sm">
          {t(locale, landingCopy.product.kicker)}
        </span>
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            {t(locale, landingCopy.product.title)}
          </h2>
        </div>

        <p className="text-on-surface-variant leading-relaxed">
          {t(locale, landingCopy.product.body1)}
        </p>

        <div className="pt-4 grid grid-cols-2 gap-4">
          <StatCard
            title={t(locale, landingCopy.product.stat1Value)}
            subtitle={t(locale, landingCopy.product.stat1)}
          />
          <StatCard
            title={t(locale, landingCopy.product.stat2Value)}
            subtitle={t(locale, landingCopy.product.stat2)}
          />
        </div>
      </div>
    </section>
  );
}

