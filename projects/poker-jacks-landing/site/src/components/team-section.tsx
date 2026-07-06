"use client";

import { useLanguage } from "@/components/language-provider";
import { SectionShell } from "@/components/section-shell";
import { SuitIcon, type Suit } from "@/components/suit-icon";

export function TeamSection() {
  const { t } = useLanguage();

  return (
    <SectionShell label={t.team.label} className="bg-paper">
      <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl text-balance">
        {t.team.title}
      </h2>
      <p className="mt-4 max-w-[58ch] leading-relaxed text-muted-foreground">
        {t.team.body}
      </p>
      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        {t.team.members.map((member) => (
          <li
            key={member.name}
            className="border-t-2 border-foreground/80 pt-4 transition-colors hover:border-[#3B4BC8]"
          >
            <p className="font-heading text-lg font-bold">
              {member.name}
              <SuitIcon
                suit={member.suit as Suit}
                className={`ml-1.5 inline-block align-[-1px] ${
                  member.suit === "heart" || member.suit === "diamond"
                    ? "text-[#C43C35]"
                    : "text-foreground/80"
                }`}
              />
            </p>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">
              {member.role}
            </p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
