import { ArrowUpRight } from "lucide-react";
import type { Messages } from "@/content/messages/types";
import type { Portfolio } from "@/content/portfolio";
import { SectionHeading } from "./section-heading";

export function ContactSection({ messages, data }: { messages: Messages; data: Portfolio }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-grid">
      <SectionHeading number="03" title={messages.contact.title} id="contact-title" />
      <div className="min-w-0">
        <h3 className="text-2xl font-medium tracking-[-0.05em] sm:text-3xl">{messages.contact.heading}</h3>
        <p className="body-copy mt-4 max-w-md">{messages.contact.description}</p>
        <a href={`mailto:${data.email}`} className="text-link mt-5 max-w-full break-all text-[13px] sm:text-sm">
          <span>{data.email}</span><ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />
        </a>
      </div>
    </section>
  );
}
