"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Icon, Line, ToggleButton } from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import { routes, display } from "@/app/resources";
import { getContent } from "@/app/resources/getContent";
import {
  getLocaleFromPathname,
  localePath,
  stripLocale,
  ui,
  type Locale,
} from "@/app/resources/i18n";
import { ThemeToggle } from "./ThemeToggle";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat(locale, {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const updateTime = () => setCurrentTime(formatter.format(new Date()));

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

/** EN | FR switch: keeps you on the same page, in the other language. */
const LanguageSwitch = ({ locale, basePath }: { locale: Locale; basePath: string }) => (
  <Flex gap="2" vertical="center" role="group" aria-label={ui[locale].switchLanguage}>
    {(["en", "fr"] as const).map((l) => (
      <ToggleButton
        key={l}
        size="s"
        href={localePath(l, basePath)}
        label={l.toUpperCase()}
        selected={locale === l}
        aria-label={ui[l].langName}
        aria-current={locale === l ? "true" : undefined}
      />
    ))}
  </Flex>
);

export const Header = () => {
  const pathname = usePathname() ?? "";
  const locale = getLocaleFromPathname(pathname);
  const basePath = stripLocale(pathname) || "/";
  const { person, about, blog, work, gallery } = getContent(locale);

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && (
            <Flex hide="s" vertical="center" gap="8">
              <Icon onBackground="accent-weak" name="globe" size="s" />
              {person.location}
            </Flex>
          )}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <ToggleButton
                  prefixIcon="home"
                  href={localePath(locale, "/")}
                  selected={basePath === "/"}
                  aria-label={locale === "fr" ? "Accueil" : "Home"}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href={localePath(locale, "/about")}
                    label={about.label}
                    selected={basePath === "/about"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href={localePath(locale, "/about")}
                    selected={basePath === "/about"}
                    aria-label={about.label}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href={localePath(locale, "/work")}
                    label={work.label}
                    selected={basePath.startsWith("/work")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href={localePath(locale, "/work")}
                    selected={basePath.startsWith("/work")}
                    aria-label={work.label}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href={localePath(locale, "/blog")}
                    label={blog.label}
                    selected={basePath.startsWith("/blog")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href={localePath(locale, "/blog")}
                    selected={basePath.startsWith("/blog")}
                    aria-label={blog.label}
                  />
                </>
              )}
              {routes["/gallery"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    href={localePath(locale, "/gallery")}
                    label={gallery.label}
                    selected={basePath.startsWith("/gallery")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href={localePath(locale, "/gallery")}
                    selected={basePath.startsWith("/gallery")}
                    aria-label={gallery.label}
                  />
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle locale={locale} />
                </>
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <LanguageSwitch locale={locale} basePath={basePath} />
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.timeZone} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
