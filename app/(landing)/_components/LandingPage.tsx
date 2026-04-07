import { Footer } from "./layout/Footer";
import { TopNav } from "./layout/TopNav";
import { FeaturesGrid } from "./sections/FeaturesGrid";
import { CompanyOverview } from "./sections/CompanyOverview";
import { FinancialModel } from "./sections/FinancialModel";
import { FundingCTA } from "./sections/FundingCTA";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { MarketOpportunity } from "./sections/MarketOpportunity";
import { ProductOverview } from "./sections/ProductOverview";
import { ROIInvestment } from "./sections/ROIInvestment";
import { TrustStrip } from "./sections/TrustStrip";
import { UniqueValue } from "./sections/UniqueValue";
import type { Locale } from "../content/landingCopy";

export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <div className="text-on-surface bg-background min-h-screen">
      <TopNav locale={locale} />
      <main className="pt-20 sm:pt-24 overflow-x-hidden">
        <Hero locale={locale} />
        <TrustStrip locale={locale} />
        <CompanyOverview locale={locale} />
        <ProductOverview locale={locale} />
        <UniqueValue locale={locale} />
        <HowItWorks locale={locale} />
        <FeaturesGrid locale={locale} />
        <ROIInvestment locale={locale} />
        <FinancialModel locale={locale} />
        <MarketOpportunity locale={locale} />
        <FundingCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

