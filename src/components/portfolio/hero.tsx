import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Messages } from "@/content/messages/types";
import type { Portfolio } from "@/content/portfolio";

export function Hero({ messages, data }: { messages: Messages; data: Portfolio }) {
  return (
    <section aria-labelledby="name" className="pb-14 pt-16 sm:pb-20 sm:pt-24">
      <p className="editorial-label mb-6">{messages.hero.role}</p>
      <h1 id="name" className="max-w-2xl text-[clamp(2.15rem,6.8vw,3.75rem)] leading-[1.16] font-medium tracking-[-0.065em]">
        Guilherme<br />Rodrigues<span aria-hidden="true" className="text-muted-foreground">.</span>
      </h1>
      <p className="mt-7 max-w-lg text-lg leading-relaxed tracking-[-0.02em] sm:text-xl">{messages.hero.intro}</p>
      <p className="body-copy mt-3 max-w-[33rem]">{messages.hero.summary}</p>
      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-1">
        <a className="text-link" href={data.linkedin}>LinkedIn <ArrowUpRight aria-hidden="true" className="size-3.5" /></a>
        <a className="text-link" href={data.github}>GitHub <ArrowUpRight aria-hidden="true" className="size-3.5" /></a>
        {data.resumeUrl && (
          <a className="text-link" href={data.resumeUrl}>{messages.hero.resume} <ArrowDown aria-hidden="true" className="size-3.5" /></a>
        )}
      </div>
    </section>
  );
}
