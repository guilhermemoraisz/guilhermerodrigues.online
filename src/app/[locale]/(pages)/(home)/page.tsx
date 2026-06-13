import { getMessages, SUPPORTED_LOCALES, DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import { HomeDescription } from "@/components/pages/home/description";
import { HomeExperiences } from "@/components/pages/home/experiences";
import { HomeTechStack } from "@/components/pages/home/tech-stack";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const raw = (await params).locale;
  const locale: Locale = SUPPORTED_LOCALES.includes(raw as Locale) ? (raw as Locale) : DEFAULT_LOCALE;
  const messages = getMessages(locale);

  return (
    <div className="flex flex-col gap-12">
      <HomeDescription messages={messages} />
      <HomeExperiences sectionTitle={messages.sections.experiences} />
      <HomeTechStack sectionTitle={messages.sections.techStack} categoryLabels={messages.categories} />
    </div>
  );
}
