import type { Messages } from "@/content/messages/types";
import { formatMonth, type Portfolio } from "@/content/portfolio";
import type { Locale } from "@/lib/locale";
import { SectionHeading } from "./section-heading";
import { TechnologyList } from "./technology-list";

type Props = { messages: Messages; data: Portfolio; locale: Locale };

export function ExperienceSection({ messages, data, locale }: Props) {
  const { experience } = messages;
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-grid">
      <SectionHeading number="01" title={experience.title} id="experience-title" />
      <div className="min-w-0">
        <article aria-labelledby="cit-title">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <h3 id="cit-title" className="text-lg font-medium tracking-tight">CI&amp;T</h3>
            <p className="font-mono text-[11px] leading-5 text-muted-foreground">
              <time dateTime={data.periods.cit.start}>{formatMonth(data.periods.cit.start, locale)}</time> — {experience.present}
            </p>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground">{experience.cit.role}</p>
          <div className="mt-8">
            <h4 className="text-sm leading-relaxed font-medium tracking-[-0.03em]">{experience.cit.automotiveClient.title}</h4>
            <div className="body-copy mt-3 space-y-3">
              {experience.cit.automotiveClient.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <TechnologyList items={data.technologies.automotiveClient} />
          </div>
          <div className="mt-8 border-l border-border pl-5">
            <h4 className="text-sm leading-relaxed font-medium tracking-[-0.03em]">{experience.cit.bootcamp.title}</h4>
            <div className="body-copy mt-3 space-y-3">
              {experience.cit.bootcamp.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <TechnologyList items={data.technologies.bootcamp} />
          </div>
        </article>
        <article aria-labelledby="screen-network-title" className="mt-10 border-t border-border pt-9">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <h3 id="screen-network-title" className="text-lg font-medium tracking-tight">Screen Network</h3>
            <p className="font-mono text-[11px] leading-5 text-muted-foreground">
              <time dateTime={data.periods.screenNetwork.start}>{formatMonth(data.periods.screenNetwork.start, locale)}</time>
              {" — "}
              <time dateTime={data.periods.screenNetwork.end}>{formatMonth(data.periods.screenNetwork.end, locale)}</time>
            </p>
          </div>
          <p className="mt-1.5 text-sm text-muted-foreground">{experience.screenNetwork.role} <span aria-hidden="true">·</span> {experience.screenNetwork.kind}</p>
          <div className="body-copy mt-5 space-y-3">
            {experience.screenNetwork.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <TechnologyList items={data.technologies.screenNetwork} />
        </article>
      </div>
    </section>
  );
}
