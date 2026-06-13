import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { getMessages, SUPPORTED_LOCALES, type Locale } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://www.guilhermerodrigues.site";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { seo } = getMessages(locale);

  return {
    title: seo.title,
    description: seo.description,
    authors: [{ name: "Guilherme Rodrigues de Morais", url: BASE_URL }],
    metadataBase: new URL(BASE_URL),
    creator: "Guilherme Rodrigues de Morais",
    publisher: "Guilherme Rodrigues de Morais",
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        "en-US": `${BASE_URL}/en-us`,
        "pt-BR": `${BASE_URL}/pt-br`,
        "x-default": `${BASE_URL}/en-us`,
      },
    },
    twitter: {
      title: seo.title,
      description: seo.description,
      siteId: "2824372050",
      creator: "@CndGui",
      creatorId: "2824372050",
      card: "summary_large_image",
    },
    openGraph: {
      type: "website",
      title: seo.title,
      description: seo.description,
    },
    applicationName: seo.title,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const htmlLang = locale === "pt-br" ? "pt-BR" : "en-US";

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body className={`bg-background text-text antialiased ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
