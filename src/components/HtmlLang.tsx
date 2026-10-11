"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/app/resources/i18n";

/** Keeps <html lang> in sync with the current language when navigating between EN and FR. */
export const HtmlLang = () => {
  const locale = getLocaleFromPathname(usePathname());

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
};
