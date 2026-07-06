"use client";

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import { renderTitleWithDecode } from "@/components/decode-word";
import { Reveal } from "@/components/reveal";
import {
  GuardScreens,
  AdminDashboard,
  AccountantLedger,
  ResidentPhone,
} from "@/components/vivco-mockups";
import { MAILTO } from "@/lib/content";

function RoleCaption({
  index,
  name,
  desc,
}: {
  index: number;
  name: string;
  desc: string;
}) {
  return (
    <div className="mt-4">
      <p className="font-heading text-base font-bold">
        <span
          className="mr-2 text-sm font-bold text-[#1F6E7E]"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          0{index}
        </span>
        {name}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {desc}
      </p>
    </div>
  );
}

export function VivcoSection() {
  const { t } = useLanguage();
  const [resident, guard, admin, accountant] = t.vivco.roles;

  return (
    <section id="vivco" className="border-t border-[#1F6E7E]/30 bg-[#ECF4F5]">
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        {/* Left rail */}
        <div className="md:col-span-4">
          <div className="md:sticky md:top-24">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#17545F]">
              {t.vivco.label}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight md:text-4xl text-balance">
              {renderTitleWithDecode(
                t.vivco.title,
                t.vivco.titleDecode,
                "text-[#1F6E7E]"
              )}
            </h2>
            <Badge
              variant="secondary"
              className="mt-4 h-auto whitespace-normal bg-[#1F6E7E]/10 px-2.5 py-1 text-[#17545f]"
            >
              {t.vivco.status}
            </Badge>
            <p className="mt-5 max-w-[46ch] leading-relaxed text-muted-foreground">
              {t.vivco.body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
              {t.vivco.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[#1F6E7E]/25 bg-white px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={MAILTO}
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo underline-offset-4 hover:underline"
            >
              {t.vivco.link}
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Role mockups: Reveal solo en el visual; las captions son estáticas */}
        <div className="md:col-span-8">
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
            <div className="row-span-2">
              <Reveal>
                <div className="flex justify-center rounded-2xl bg-[#FFFFFF] px-6 py-8">
                  <ResidentPhone />
                </div>
              </Reveal>
              <RoleCaption index={1} name={resident.name} desc={resident.desc} />
            </div>

            <div>
              <Reveal delay={0.08}>
                <GuardScreens />
              </Reveal>
              <RoleCaption index={2} name={guard.name} desc={guard.desc} />
            </div>

            <div>
              <Reveal delay={0.14}>
                <AdminDashboard />
              </Reveal>
              <RoleCaption index={3} name={admin.name} desc={admin.desc} />
            </div>

            <div className="sm:col-start-2">
              <Reveal delay={0.1}>
                <AccountantLedger />
              </Reveal>
              <RoleCaption
                index={4}
                name={accountant.name}
                desc={accountant.desc}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
