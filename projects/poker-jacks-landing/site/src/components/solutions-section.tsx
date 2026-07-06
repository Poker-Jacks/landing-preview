"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { SectionShell } from "@/components/section-shell";

export function SolutionsSection() {
  const { t } = useLanguage();

  return (
    <SectionShell
      id="soluciones"
      label={t.solutions.label}
      labelClass="text-indigo"
    >
      <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl text-balance">
        {t.solutions.title}
      </h2>
      <ol className="mt-10">
        {t.solutions.items.map((item, i) => (
          <li
            key={item.title}
            className="grid gap-x-6 gap-y-2 rounded-lg border-t border-[#3B4BC8]/25 py-6 transition-colors first:border-t-0 first:pt-0 hover:bg-[#F3F5FC] sm:-mx-4 sm:grid-cols-[3.5rem_1fr] sm:px-4"
          >
            <span
              className="inline-flex h-6 w-9 items-center justify-center justify-self-start rounded-md bg-[#EEF0FB] font-heading text-sm font-bold text-indigo sm:mt-0.5"
              style={{ fontVariantNumeric: "tabular-nums" }}
              aria-hidden="true"
            >
              0{i + 1}
            </span>
            <div>
              <h3 className="font-heading text-xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[62ch] leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

export function EarlySection() {
  const { t } = useLanguage();

  return (
    <SectionShell
      label={t.early.label}
      className="bg-[#FEF6EE]"
      labelClass="text-[#C2410C]"
    >
      <h2 className="font-heading text-2xl font-extrabold tracking-tight md:text-3xl">
        {t.early.title}
      </h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-2">
        {t.early.products.map((product) => (
          <div key={product.name}>
            <div className="flex items-center gap-3">
              <h3 className="font-heading text-xl font-bold">{product.name}</h3>
              <Badge
                variant="outline"
                className="border-[#F97316]/30 bg-[#FDEEE3] text-[#C2410C]"
              >
                {product.badge}
              </Badge>
            </div>
            <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-muted-foreground">
              {product.desc}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-9 max-w-[64ch] border-t border-[#F97316]/25 pt-6 text-sm leading-relaxed text-muted-foreground">
        {t.early.note}
      </p>
    </SectionShell>
  );
}
