import { getMessages, type Locale } from "@/lib/i18n";
import { HomeDescription } from "@/components/pages/home/description";
import { HomeExperiences } from "@/components/pages/home/experiences";
import { HomeTechStack } from "@/components/pages/home/tech-stack";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <div className="flex flex-col gap-12">
      <HomeDescription messages={messages} />
      <HomeExperiences sectionTitle={messages.sections.experiences} />
      <HomeTechStack sectionTitle={messages.sections.techStack} categoryLabels={messages.categories} />
    </div>
  );
}
