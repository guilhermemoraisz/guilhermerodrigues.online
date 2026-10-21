import { NextResponse, type NextRequest } from "next/server";
import { resolveLocale } from "@/lib/locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const aliases: Record<string, string> = { "/pt-br": "/pt", "/en-us": "/en" };
  const destination = pathname === "/"
    ? `/${resolveLocale(request.headers.get("accept-language"))}`
    : aliases[pathname];

  if (!destination) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = destination;
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Cache-Control", "private, no-store");
  if (pathname === "/") response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = { matcher: ["/", "/pt-br", "/en-us"] };
