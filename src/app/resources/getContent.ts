import * as en from "@/app/resources/content";
import * as fr from "@/app/resources/content.fr";
import type { Locale } from "@/app/resources/i18n";

export type Content = typeof en;

/** Returns the full set of page content (person, home, about, ...) for a locale. */
export function getContent(locale: Locale): Content {
  return (locale === "fr" ? fr : en) as Content;
}
