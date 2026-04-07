import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4 items-center">
      <span className="material-symbols-outlined text-primary" aria-hidden="true">
        check_circle
      </span>
      <span>{children}</span>
    </li>
  );
}

export function MarketOpportunity({ locale }: { locale: Locale }) {
  return (
    <section
      id="market"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
    >
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-black text-primary">
          {t(locale, landingCopy.market.title)}
        </h2>
        <div className="flex flex-col gap-1">
          <p className="text-lg text-on-surface">{t(locale, landingCopy.market.body)}</p>
        </div>

        <ul className="space-y-4">
          {landingCopy.market.bullets.map((b) => (
            <Bullet key={b.en}>{t(locale, b)}</Bullet>
          ))}
        </ul>
      </div>

      <div className="lg:w-1/2">
        <img
          alt="Sustainable Farming Future"
          className="w-full h-auto rounded-xl shadow-2xl"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdTYIn3_EP2jujIfmjyP7US-wfqgxYqJIhvxoqTNljMgFjKJvWSZIs-jYCFHHeFwe_Qk88aCjt5B_aPlu2mX8nb2-DxCj3xUS-m3lsZXFD0yy27lEJDtFOYYnKA1y1jQAQQ6baaMEjSNuy18WacMooCzGWIJbHtIXumduZ1Qr8z6SSREZeqFm9GKmTiPL9Y5LEQ7VaGJv1rtG7ReslGdYIRr5n5ayx0MJDgL43xOTAwLYrq3FnxjEibVNNTQyWCZ9aki-1gUOFC3vS"
        />
      </div>
    </section>
  );
}

