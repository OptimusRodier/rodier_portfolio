import { Column, Heading, Text } from "@/once-ui/components";
import { ui, type Locale } from "@/app/resources/i18n";

export default function NotFound({ locale = "en" }: { locale?: Locale }) {
  const t = ui[locale];
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        {t.notFoundTitle}
      </Heading>
      <Text onBackground="neutral-weak">{t.notFoundText}</Text>
    </Column>
  );
}
