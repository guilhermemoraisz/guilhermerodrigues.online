import type { Messages } from "@/content/messages/types";
import { formatMonth, type Portfolio } from "@/content/portfolio";
import type { Locale } from "@/lib/locale";
import { SectionHeading } from "./section-heading";

export function EducationSection({ messages, data, locale }: { messages: Messages; data: Portfolio; locale: Locale }) {
  return (
    <section id="education" aria-labelledby="education-title" className="section-grid">
      <SectionHeading number="02" title={messages.education.title} id="education-title" />
      <div>
        <h3 className="text-[15px] leading-relaxed font-medium tracking-[-0.03em]">{messages.education.course}</h3>
        <p className="mt-2 text-sm">{messages.education.institution}</p>
        <p className="mt-3 font-mono text-[11px] text-muted-foreground">
          <time dateTime={data.periods.education.start}>{formatMonth(data.periods.education.start, locale)}</time> — {messages.experience.present}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{messages.education.expected}</p>
      </div>
    </section>
  );
}
