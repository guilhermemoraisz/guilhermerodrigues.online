// @vitest-environment node
import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { proxy } from "./proxy";

function makeRequest(path: string, acceptLanguage?: string) {
  const headers: HeadersInit = {};
  if (acceptLanguage) headers["accept-language"] = acceptLanguage;
  return new NextRequest(`http://localhost${path}`, { headers });
}

describe("proxy (locale middleware)", () => {
  it("redirects / with pt-BR Accept-Language to /pt-br", () => {
    const res = proxy(makeRequest("/", "pt-BR,pt;q=0.9,en;q=0.8"));
    expect(res?.status).toBe(307);
    expect(res?.headers.get("location")).toContain("/pt-br");
  });

  it("redirects / with en-US Accept-Language to /en-us", () => {
    const res = proxy(makeRequest("/", "en-US,en;q=0.9"));
    expect(res?.status).toBe(307);
    expect(res?.headers.get("location")).toContain("/en-us");
  });

  it("redirects / without Accept-Language to /en-us", () => {
    const res = proxy(makeRequest("/"));
    expect(res?.status).toBe(307);
    expect(res?.headers.get("location")).toContain("/en-us");
  });

  it("returns undefined for /pt-br (already localized)", () => {
    const res = proxy(makeRequest("/pt-br", "en-US"));
    expect(res).toBeUndefined();
  });

  it("returns undefined for /en-us (already localized)", () => {
    const res = proxy(makeRequest("/en-us", "pt-BR"));
    expect(res).toBeUndefined();
  });
});
