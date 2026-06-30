import { type NextRequest, NextResponse } from "next/server";
import { detectLocale, SUPPORTED_LOCALES } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (SUPPORTED_LOCALES.some((l) => pathname.startsWith(`/${l}`))) {
    return;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const locale = detectLocale(acceptLanguage);
  const target = pathname === "/" ? "" : pathname;

  return NextResponse.redirect(new URL(`/${locale}${target}`, request.url));
}

export const config = {
  matcher: ["/((?!_next|api|files|images|favicon\\.ico).*)"],
};
