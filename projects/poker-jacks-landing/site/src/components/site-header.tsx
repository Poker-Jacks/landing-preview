"use client";

import * as React from "react";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";
import { MAILTO, type Lang } from "@/lib/content";

function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border p-0.5 ${className ?? ""}`}
      role="group"
      aria-label="Idioma / Language"
    >
      {(["es", "en"] as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors duration-150 ${
            lang === code
              ? "bg-ink text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="Poker Jacks — inicio" className="text-foreground">
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LangToggle />
          <Button
            size="lg"
            className="rounded-full px-4"
            render={<a href={MAILTO} />}
          >
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-lg" aria-label={t.nav.menuLabel} />
              }
            >
              <MenuIcon className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetHeader>
                <SheetTitle className="sr-only">{t.nav.menuTitle}</SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 px-4"
                aria-label={t.nav.menuTitle}
              >
                {t.nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-3 font-heading text-xl font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto px-6 pb-8">
                <Button
                  size="lg"
                  className="w-full rounded-full"
                  render={<a href={MAILTO} onClick={() => setOpen(false)} />}
                >
                  {t.nav.cta}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
