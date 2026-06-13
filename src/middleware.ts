import { NextRequest, NextResponse } from "next/server";
import { SUPPORTED_LOCALES, detectLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
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
