"use client";

import { Logo } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            <a
              href="mailto:hola@pokerjacks.dev"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              hola@pokerjacks.dev
            </a>
            <p className="mt-2">{t.footer.location}</p>
            <p className="mt-2">
              © {year} {t.footer.rights}
            </p>
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          {t.footer.credit}
        </p>
      </div>
    </footer>
  );
}
