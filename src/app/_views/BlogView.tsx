import { Column, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL } from "@/app/resources";
import { getContent } from "@/app/resources/getContent";
import { localePath, type Locale } from "@/app/resources/i18n";
import { Meta, Schema } from "@/once-ui/modules";

export function blogMetadata(locale: Locale) {
  const { blog } = getContent(locale);
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
    path: localePath(locale, blog.path),
    locale,
    alternates: { en: "/blog", fr: "/fr/blog" },
  });
}

export function BlogView({ locale }: { locale: Locale }) {
  const { blog, person, newsletter } = getContent(locale);
  return (
    <Column maxWidth="s">
      <Schema
        as="blog"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={localePath(locale, blog.path)}
        image={`${baseURL}/og?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${localePath(locale, "/blog")}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1}>
        <Posts range={[1, 1]} thumbnail direction="column" locale={locale} />
        <Posts range={[2, 3]} thumbnail locale={locale} />
        <Posts range={[4]} columns="2" locale={locale} />
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} locale={locale} />}
    </Column>
  );
}
