"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { ResidentPhone } from "@/components/vivco-mockups";
import { MAILTO } from "@/lib/content";

const EASE = [0.25, 1, 0.5, 1] as const;

export function Hero() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  const item = (i: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduced ? 0 : 0.6,
      delay: reduced ? 0 : 0.08 * i,
      ease: EASE,
    },
  });

  return (
    <section id="top" className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-x-8 gap-y-12 px-5 pt-16 pb-20 md:px-8 md:pt-24 md:pb-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            {...item(0)}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-indigo" aria-hidden="true" />
            {t.hero.badge}
          </motion.p>

          <motion.h1
            {...item(1)}
            className="mt-6 font-heading text-[clamp(2.4rem,5.6vw,4.15rem)] leading-[1.04] font-extrabold tracking-tight text-balance"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            {...item(2)}
            className="mt-6 max-w-[54ch] text-lg leading-relaxed text-muted-foreground"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div {...item(3)} className="mt-9">
            <div className="flex flex-wrap items-center gap-3">
              <Button
                className="h-12 rounded-full px-6 text-base"
                render={<a href={MAILTO} />}
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-foreground/20 bg-transparent px-6 text-base hover:bg-foreground/5"
                render={<a href="#proceso" />}
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t.hero.ctaNote}</p>
          </motion.div>

          <motion.p {...item(4)} className="mt-12 text-sm text-muted-foreground">
            {t.hero.proof}{" "}
            <a
              href="#vivco"
              className="group inline-flex items-center gap-1 font-semibold text-indigo underline-offset-4 hover:underline"
            >
              {t.hero.proofLink}
              <ArrowRight
                className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.2, ease: EASE }}
          className="flex justify-center lg:col-span-5 lg:justify-end"
        >
          <div className="rotate-[1.5deg]">
            <ResidentPhone />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
