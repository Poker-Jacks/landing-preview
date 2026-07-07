import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { VivcoSection } from "@/components/vivco-section";
import {
  SolutionsSection,
  EarlySection,
} from "@/components/solutions-section";
import { ProcessSection } from "@/components/process-section";
import { TeamSection } from "@/components/team-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <VivcoSection />
        <SolutionsSection />
        <EarlySection />
        <ProcessSection />
        <TeamSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
