"use client";

import { useLanguage } from "@/components/language-provider";
import { SectionShell } from "@/components/section-shell";

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <SectionShell
      id="proceso"
      label={t.process.label}
      className="bg-[#F3F5FC]"
      labelClass="text-indigo"
    >
      <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl text-balance">
        {t.process.title}
      </h2>
      <ol className="mt-10">
        {t.process.steps.map((step, i) => (
          <li
            key={step.title}
            className="grid gap-x-6 gap-y-2 border-t border-[#3B4BC8]/15 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr]"
          >
            <span
              className="font-heading text-3xl font-extrabold text-indigo"
              style={{ fontVariantNumeric: "tabular-nums" }}
              aria-hidden="true"
            >
              0{i + 1}
            </span>
            <div>
              <h3 className="font-heading text-xl font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[62ch] leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
              <p className="mt-3 max-w-[62ch] text-sm leading-relaxed">
                <span className="font-semibold tracking-wide uppercase text-xs text-indigo">
                  {t.process.deliverableLabel}
                </span>
                <span className="text-foreground/90"> · {step.deliverable}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
      <aside className="mt-4 rounded-xl border border-[#3B4BC8]/15 bg-white/70 px-6 py-5 md:px-8 md:py-6">
        <p className="max-w-[68ch] leading-relaxed text-foreground/90">
          {t.process.honesty}
        </p>
      </aside>
    </SectionShell>
  );
}
