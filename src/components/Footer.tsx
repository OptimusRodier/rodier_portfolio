"use client";

import { usePathname } from "next/navigation";
import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { getContent } from "@/app/resources/getContent";
import { getLocaleFromPathname, ui } from "@/app/resources/i18n";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const locale = getLocaleFromPathname(usePathname());
  const { person, social, resumes } = getContent(locale);

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
            / {ui[locale].builtWith}{" "}
            <SmartLink
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Text>
        <Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.link}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  aria-label={item.name || item.icon}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
          {resumes.map((cv) => (
            <IconButton
              key={cv.link}
              href={cv.link}
              icon="document"
              tooltip={cv.label}
              aria-label={cv.label}
              size="s"
              variant="ghost"
            />
          ))}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
