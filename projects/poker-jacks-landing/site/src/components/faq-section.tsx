"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/components/language-provider";
import { SectionShell } from "@/components/section-shell";

export function FaqSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="faq" label={t.faq.label} labelClass="text-indigo">
      <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl text-balance">
        {t.faq.title}
      </h2>
      <Accordion className="mt-8">
        {t.faq.items.map((item) => (
          <AccordionItem key={item.q} value={item.q}>
            <AccordionTrigger className="py-5 font-heading text-base font-bold tracking-tight transition-colors hover:text-[#3B4BC8] hover:no-underline aria-expanded:text-[#3B4BC8] hover:**:data-[slot=accordion-trigger-icon]:text-[#3B4BC8] aria-expanded:**:data-[slot=accordion-trigger-icon]:text-[#3B4BC8] md:text-lg">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              <p className="max-w-[64ch] pb-3 leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  );
}
