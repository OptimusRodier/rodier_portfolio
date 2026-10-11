import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getLocalizedPosts } from "@/app/utils/utils";
import { AvatarGroup, Button, Column, Flex, Heading, SmartImage, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { getContent } from "@/app/resources/getContent";
import { localePath, ui, type Locale } from "@/app/resources/i18n";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
import { Metadata } from "next";
import { Meta, Schema } from "@/once-ui/modules";

const PROJECTS_PATH = ["src", "app", "work", "projects"];

export async function projectStaticParams(): Promise<{ slug: string }[]> {
  return getLocalizedPosts("en", PROJECTS_PATH).map((post) => ({ slug: post.slug }));
}

function toSlug(slug: string | string[] | undefined) {
  return Array.isArray(slug) ? slug.join("/") : slug || "";
}

export async function projectMetadata(
  locale: Locale,
  params: Promise<{ slug: string | string[] }>,
): Promise<Metadata> {
  const { work } = getContent(locale);
  const slugPath = toSlug((await params).slug);
  const post = getLocalizedPosts(locale, PROJECTS_PATH).find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image
      ? `${baseURL}${post.metadata.image}`
      : `${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`,
    path: localePath(locale, `${work.path}/${post.slug}`),
    locale,
    alternates: { en: `/work/${post.slug}`, fr: `/fr/work/${post.slug}` },
  });
}

export async function ProjectView({
  locale,
  params,
}: {
  locale: Locale;
  params: Promise<{ slug: string | string[] }>;
}) {
  const { about, person, work } = getContent(locale);
  const t = ui[locale];
  const slugPath = toSlug((await params).slug);

  const post = getLocalizedPosts(locale, PROJECTS_PATH).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((member) => ({
      src: member.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={localePath(locale, `${work.path}/${post.slug}`)}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={`${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${localePath(locale, about.path)}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button data-border="rounded" href={localePath(locale, "/work")} variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          {t.backToProjects}
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={post.metadata.title}
          src={post.metadata.images[0]}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="m" />}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt, true, locale)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
