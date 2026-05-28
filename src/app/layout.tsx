import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-background text-text antialiased ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

/** Generates SEO metadata including Open Graph and Twitter Card tags. */
export async function generateMetadata() {
  const title = "Guilherme Rodrigues - Web Developer";
  const description =
    "Full Stack Developer specialized in React and TypeScript on the front-end, and NestJS/Spring Boot on the back-end. Focused on building modern, scalable applications with clean code.";
  const websiteURL = "https://www.guilhermerodrigues.site/";

  return {
    title,
    description,
    authors: [{ name: "Guilherme Rodrigues de Morais", url: websiteURL }],
    metadataBase: new URL(websiteURL),
    creator: "Guilherme Rodrigues de Morais",
    publisher: "Guilherme Rodrigues de Morais",
    alternates: { canonical: websiteURL },
    twitter: {
      title,
      description,
      siteId: "2824372050",
      creator: "@CndGui",
      creatorId: "2824372050",
      card: "summary_large_image",
    },
    openGraph: {
      type: "website",
      title,
      description,
    },
    applicationName: title,
  };
}
