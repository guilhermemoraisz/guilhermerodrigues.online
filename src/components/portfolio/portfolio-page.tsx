import { ArrowUp } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Messages } from "@/content/messages/types";
import { portfolio, type Portfolio } from "@/content/portfolio";
import type { Locale } from "@/lib/locale";
import { ContactSection } from "./contact-section";
import { EducationSection } from "./education-section";
import { ExperienceSection } from "./experience-section";
import { Hero } from "./hero";

export function PortfolioPage({ locale, messages, data = portfolio }: { locale: Locale; messages: Messages; data?: Portfolio }) {
  return (
    <div id="top" className="mx-auto max-w-[868px] px-6 sm:px-10">
      <a href="#main" className="fixed top-3 left-3 z-50 -translate-y-24 rounded-md bg-foreground px-4 py-3 text-sm text-background focus:translate-y-0">
        {messages.navigation.skip}
      </a>
      <header className="flex min-h-24 items-center justify-between gap-4 border-b border-border sm:min-h-28">
        <a href="#top" aria-label={`${data.name} — ${messages.navigation.home}`} className="font-mono text-sm font-medium tracking-[-0.08em]">
          gr<span aria-hidden="true" className="text-muted-foreground">.</span>
        </a>
        <div className="flex items-center gap-4 sm:gap-7">
          <nav aria-label={messages.navigation.home} className="flex items-center gap-4 sm:gap-6">
            <a href="#experience" className="inline-flex min-h-10 items-center text-xs text-muted-foreground transition-colors hover:text-foreground">{messages.navigation.experience}</a>
            <a href="#contact" className="inline-flex min-h-10 items-center text-xs text-muted-foreground transition-colors hover:text-foreground">{messages.navigation.contact}</a>
          </nav>
          <ThemeToggle labels={messages.theme} />
        </div>
      </header>
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero messages={messages} data={data} />
        <ExperienceSection messages={messages} data={data} locale={locale} />
        <EducationSection messages={messages} data={data} locale={locale} />
        <ContactSection messages={messages} data={data} />
      </main>
      <footer className="flex items-center justify-between gap-5 border-t border-border py-7 font-mono text-[10px] text-muted-foreground sm:py-9">
        <span>{data.name}</span>
        <a href="#top" aria-label={messages.contact.backToTop} className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full transition-colors hover:bg-muted hover:text-foreground">
          <ArrowUp aria-hidden="true" className="size-4" />
        </a>
      </footer>
    </div>
  );
}
