import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { LandingIcon } from "../ui/LandingIcon";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4 items-center" data-anim="item">
      <LandingIcon
        name="check_circle"
        size={22}
        strokeWidth={2.5}
        className="text-primary shrink-0"
      />
      <span>{children}</span>
    </li>
  );
}

export function MarketOpportunity({ locale }: { locale: Locale }) {
  return (
    <section
      id="market"
      data-animate="market"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
    >
      <div className="lg:w-1/2 space-y-6">
        <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary">
          {t(locale, landingCopy.market.title)}
        </h2>
        <div className="flex flex-col gap-1">
          <p data-anim="body" className="text-lg text-on-surface">
            {t(locale, landingCopy.market.body)}
          </p>
        </div>

        <ul className="space-y-4">
          {landingCopy.market.bullets.map((b) => (
            <Bullet key={b.en}>{t(locale, b)}</Bullet>
          ))}
        </ul>
      </div>

      <div className="lg:w-1/2" data-anim="media">
        <img
          alt="Sustainable Farming Future"
          className="w-full h-auto rounded-xl shadow-2xl"
          src="/images/demand.png"
        />
      </div>
    </section>
  );
}

