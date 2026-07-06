import * as React from "react";

/*
 * Editorial layout shared by most sections: small label on the left
 * rail, content on the right. Collapses to stacked on mobile.
 */
export function SectionShell({
  id,
  label,
  children,
  aside,
  className,
  labelClass,
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
  /** Optional extra content under the label (sticky on desktop) */
  aside?: React.ReactNode;
  className?: string;
  /** Overrides the label color (defaults to muted) */
  labelClass?: string;
}) {
  return (
    <section id={id} className={`border-t border-border ${className ?? ""}`}>
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-8 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-24">
            <p
              className={`text-xs font-semibold tracking-[0.14em] uppercase ${
                labelClass ?? "text-muted-foreground"
              }`}
            >
              {label}
            </p>
            {aside}
          </div>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
