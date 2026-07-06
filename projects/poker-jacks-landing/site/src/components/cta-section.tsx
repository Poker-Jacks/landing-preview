"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { renderTitleWithDecode } from "@/components/decode-word";
import { MAILTO } from "@/lib/content";

/*
 * Grain sutil (feTurbulence, ~3% opacidad) solo en la banda oscura:
 * textura anti-"flat lifeless" sin costo de performance.
 */
const GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#141414] text-[#fafaf9]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: GRAIN_URI }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#F97316]">
          {t.cta.label}
        </p>
        <h2 className="mt-4 max-w-[22ch] font-heading text-4xl font-extrabold tracking-tight md:text-5xl text-balance">
          {renderTitleWithDecode(
            t.cta.title,
            t.cta.titleDecode,
            "text-[#F97316]"
          )}
        </h2>
        <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-[#b8b5ad]">
          {t.cta.body}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button
            className="h-12 rounded-full bg-[#fafaf9] px-7 text-base text-[#141414] hover:bg-[#e8e6e1]"
            render={<a href={MAILTO} />}
          >
            {t.cta.button}
          </Button>
          <a
            href={MAILTO}
            className="text-sm font-medium text-[#b8b5ad] underline underline-offset-4 transition-colors duration-150 hover:text-[#F97316]"
          >
            {t.cta.email}
          </a>
        </div>
      </div>
    </section>
  );
}
