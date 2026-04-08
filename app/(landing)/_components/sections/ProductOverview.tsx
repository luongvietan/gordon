import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { LandingIcon } from "../ui/LandingIcon";

function StatCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-4 bg-surface-container-low rounded-lg" data-anim="card">
      <p className="text-primary font-bold">{title}</p>
      <p className="text-xs text-on-surface-variant">{subtitle}</p>
    </div>
  );
}

export function ProductOverview({ locale }: { locale: Locale }) {
  return (
    <section
      id="products"
      data-animate="products"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
    >
      <div className="order-2 lg:order-1" data-anim="media">
        <img
          alt="Product Details"
          className="w-full rounded-xl shadow-xl aspect-[1170/600] object-contain bg-surface-container-low"
          src="/images/product_detail.png"
        />
      </div>

      <div className="order-1 lg:order-2 space-y-6">
        <span data-anim="subtitle" className="text-tertiary font-bold tracking-widest uppercase text-sm">
          {t(locale, landingCopy.product.kicker)}
        </span>
        <div className="flex flex-col gap-1">
          <h2 data-anim="title" className="text-3xl sm:text-4xl font-bold text-primary">
            {t(locale, landingCopy.product.title)}
          </h2>
        </div>

        <p data-anim="body" className="text-on-surface-variant leading-relaxed">
          {t(locale, landingCopy.product.body1)}
        </p>

        <div className="flex flex-wrap gap-3 pt-2" data-anim="cta">
          <a
            href="/files/Chicken-Coop-Full-Product-Details.pdf"
            download
            className="bg-primary text-white px-5 sm:px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            {t(locale, landingCopy.product.downloadPdf)}
            <LandingIcon name="download" size={18} className="text-white" />
          </a>
        </div>

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

