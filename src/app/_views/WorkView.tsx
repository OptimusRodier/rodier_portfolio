import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent } from "@/app/resources/getContent";
import { localePath, type Locale } from "@/app/resources/i18n";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";

export function workMetadata(locale: Locale) {
  const { work } = getContent(locale);
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: localePath(locale, work.path),
    locale,
    alternates: { en: "/work", fr: "/fr/work" },
  });
}

export function WorkView({ locale }: { locale: Locale }) {
  const { about, person, work } = getContent(locale);
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={localePath(locale, work.path)}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${localePath(locale, about.path)}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Projects locale={locale} />
    </Column>
  );
}
