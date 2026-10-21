import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";
import { getMessages } from "@/content/messages";
import { isLocale } from "@/lib/locale";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PortfolioPage locale={locale} messages={getMessages(locale)} />;
}
