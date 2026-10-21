import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { getMessages } from "@/content/messages";
import { isLocale, SUPPORTED_LOCALES } from "@/lib/locale";
import "../globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);
  return {
    metadataBase: new URL(process.env.SITE_URL ?? "https://www.guilhermerodrigues.online"),
    title: messages.metadata.title,
    description: messages.metadata.description,
    authors: [{ name: "Guilherme Rodrigues" }],
    alternates: { canonical: `/${locale}`, languages: { pt: "/pt", en: "/en", "x-default": "/en" } },
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      url: `/${locale}`,
      siteName: "Guilherme Rodrigues",
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      alternateLocale: locale === "pt" ? "en_US" : "pt_BR",
    },
    twitter: { card: "summary", title: messages.metadata.title, description: messages.metadata.description },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale} suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
