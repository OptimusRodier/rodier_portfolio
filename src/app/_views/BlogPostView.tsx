import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getLocalizedPosts } from "@/app/utils/utils";
import { AvatarGroup, Button, Column, Heading, HeadingNav, Icon, Row, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent } from "@/app/resources/getContent";
import { localePath, ui, type Locale } from "@/app/resources/i18n";
import ScrollToHash from "@/components/ScrollToHash";
import { Metadata } from "next";
import { Meta, Schema } from "@/once-ui/modules";

const POSTS_PATH = ["src", "app", "blog", "posts"];

export async function blogPostStaticParams(): Promise<{ slug: string }[]> {
  return getLocalizedPosts("en", POSTS_PATH).map((post) => ({ slug: post.slug }));
}

function toSlug(slug: string | string[] | undefined) {
  return Array.isArray(slug) ? slug.join("/") : slug || "";
}

export async function blogPostMetadata(
  locale: Locale,
  params: Promise<{ slug: string | string[] }>,
): Promise<Metadata> {
  const { blog } = getContent(locale);
  const slugPath = toSlug((await params).slug);
  const post = getLocalizedPosts(locale, POSTS_PATH).find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image
      ? `${baseURL}${post.metadata.image}`
      : `${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`,
    path: localePath(locale, `${blog.path}/${post.slug}`),
    locale,
    alternates: { en: `/blog/${post.slug}`, fr: `/fr/blog/${post.slug}` },
  });
}

export async function BlogPostView({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<{ slug: string | string[] }>;
}) {
  const { blog, about, person } = getContent(locale);
  const t = ui[locale];
  const slugPath = toSlug((await params).slug);

  const post = getLocalizedPosts(locale, POSTS_PATH).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars = post.metadata.team?.map((member) => ({
    src: member.avatar,
  })) || [];

  return (
    <Row fillWidth>
      <Row maxWidth={12} hide="m" />
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="xs" gap="l">
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={localePath(locale, `${blog.path}/${post.slug}`)}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt || new Date().toISOString()} // Ensuring a valid date
            dateModified={post.metadata.publishedAt || new Date().toISOString()}
            image={`${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`}
            author={{
              name: person.name,
              url: `${baseURL}${localePath(locale, about.path)}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          <Button data-border="rounded" href={localePath(locale, "/blog")} weight="default" variant="tertiary" size="s" prefixIcon="chevronLeft">
            {t.backToPosts}
          </Button>
          <Heading variant="display-strong-s">{post.metadata.title}</Heading>
          <Row gap="12" vertical="center">
            {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
            {post.metadata.publishedAt && typeof post.metadata.publishedAt === "string" ? (
              <Text variant="body-default-s" onBackground="neutral-weak">
                {post.metadata.publishedAt}
              </Text>
            ) : null}
          </Row>
          <Column as="article" fillWidth>
            <CustomMDX source={post.content} />
          </Column>
          <ScrollToHash />
        </Column>
      </Row>
      <Column maxWidth={12} paddingLeft="40" fitHeight position="sticky" top="80" gap="16" hide="m">
        <Row gap="12" paddingLeft="2" vertical="center" onBackground="neutral-medium" textVariant="label-default-s">
          <Icon name="document" size="xs" />
          {t.onThisPage}
        </Row>
        <HeadingNav fitHeight />
      </Column>
    </Row>
  );
}
