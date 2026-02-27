/**
 * App-Subdomain-Proxy
 *
 * Leitet Anfragen von galvanotrack.de/app/* an app.galvanotrack.de weiter.
 * Wird in der Next.js Middleware konfiguriert.
 *
 * Verwendung: Importieren und in middleware.ts einbinden.
 */

export const APP_SUBDOMAIN = "app.galvanotrack.de";
export const MARKETING_DOMAIN = "galvanotrack.de";

/**
 * Prüft ob eine URL zum App-Subdomain weitergeleitet werden soll.
 */
export function shouldRedirectToApp(pathname: string): boolean {
  const appPaths = ["/app", "/dashboard", "/login", "/register", "/signup"];
  return appPaths.some((path) => pathname.startsWith(path));
}

/**
 * Gibt die Redirect-URL für die App zurück.
 */
export function getAppRedirectUrl(
  pathname: string,
  searchParams: string = "",
): string {
  const cleanPath = pathname.replace(/^\/app/, "") || "/";
  const query = searchParams ? `?${searchParams}` : "";
  return `https://${APP_SUBDOMAIN}${cleanPath}${query}`;
}
