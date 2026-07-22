import { defineMiddleware } from "astro:middleware";

const localizedRoutes = new Set(["/", "/music", "/music/", "/languages", "/languages/", "/en", "/en/", "/en/music", "/en/music/", "/en/languages", "/en/languages/"]);

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;
  if (!localizedRoutes.has(pathname) || context.request.method !== "GET") return next();

  const cookieLocale = context.cookies.get("americana-locale")?.value;
  const activeLocale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
  const savedLocale = cookieLocale === "es" || cookieLocale === "en" ? cookieLocale : undefined;
  const detectedLocale = savedLocale ?? (context.preferredLocale === "en" ? "en" : "es");

  // Without a saved preference, detect language only at the entry point.
  // An explicitly localized URL such as /en/music should always be respected.
  if (!savedLocale && pathname !== "/") return next();

  if (detectedLocale === activeLocale) return next();

  const destination = detectedLocale === "en"
    ? (pathname === "/" ? "/en" : `/en${pathname}`)
    : (pathname.replace(/^\/en(?=\/|$)/, "") || "/");
  return context.redirect(`${destination}${search}`, 302);
});
