export type Locale = "en" | "fr";

export const locales: Locale[] = ["en", "fr"];
export const defaultLocale: Locale = "en";

/** Detect the locale from a URL pathname. English lives at the root, French under /fr. */
export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) return defaultLocale;
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

/** Remove the locale prefix: "/fr/about" -> "/about", "/fr" -> "/". */
export function stripLocale(pathname: string): string {
  if (pathname === "/fr") return "/";
  if (pathname.startsWith("/fr/")) return pathname.slice(3);
  return pathname;
}

/** Add the locale prefix: ("fr", "/about") -> "/fr/about", ("en", "/about") -> "/about". */
export function localePath(locale: Locale, path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (locale === "fr") return p === "/" ? "/fr" : `/fr${p}`;
  return p;
}

/** Short UI strings that are not part of the page content. */
export const ui = {
  en: {
    latestFromBlog: "Latest from the blog",
    readMore: "Read more",
    viewProject: "View project",
    backToProjects: "Projects",
    backToPosts: "Posts",
    onThisPage: "On this page",
    scheduleCall: "Schedule a call",
    spokenLanguages: "Spoken languages",
    notFoundTitle: "Page Not Found",
    notFoundText: "The page you are looking for does not exist.",
    switchLanguage: "Switch language",
    switchToDark: "Switch to dark mode",
    switchToLight: "Switch to light mode",
    builtWith: "Build your portfolio with",
    subscribe: "Subscribe",
    invalidEmail: "Please enter a valid email address.",
    today: "Today",
    yesterday: "Yesterday",
    daysAgo: (n: number) => `${n} days ago`,
    passwordTitle: "This page is password protected",
    password: "Password",
    submit: "Submit",
    incorrectPassword: "Incorrect password",
    dateLocale: "en-US",
    langName: "English",
  },
  fr: {
    latestFromBlog: "Derniers articles du blog",
    readMore: "Lire la suite",
    viewProject: "Voir le projet",
    backToProjects: "Projets",
    backToPosts: "Articles",
    onThisPage: "Sur cette page",
    scheduleCall: "Planifier un appel",
    spokenLanguages: "Langues parlées",
    notFoundTitle: "Page introuvable",
    notFoundText: "La page que vous recherchez n'existe pas.",
    switchLanguage: "Changer de langue",
    switchToDark: "Passer en mode sombre",
    switchToLight: "Passer en mode clair",
    builtWith: "Créez votre portfolio avec",
    subscribe: "S'abonner",
    invalidEmail: "Veuillez saisir une adresse e-mail valide.",
    today: "Aujourd'hui",
    yesterday: "Hier",
    daysAgo: (n: number) => `il y a ${n} jours`,
    passwordTitle: "Cette page est protégée par un mot de passe",
    password: "Mot de passe",
    submit: "Valider",
    incorrectPassword: "Mot de passe incorrect",
    dateLocale: "fr-FR",
    langName: "Français",
  },
} as const;
