import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";
import { locales, localePath } from "@/app/resources/i18n";

const site = baseURL.replace(/\/$/, "");

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    path: `/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const today = new Date().toISOString().split("T")[0];
  const pages = Object.keys(routesConfig)
    .filter((route) => routesConfig[route as keyof typeof routesConfig])
    // the gallery has no French page
    .filter((route) => route !== "/gallery")
    .map((route) => ({ path: route, lastModified: today }));

  return [...pages, ...blogs, ...works].flatMap((entry) =>
    locales.map((locale) => ({
      url: `${site}${localePath(locale, entry.path)}`,
      lastModified: entry.lastModified,
      alternates: {
        languages: {
          en: `${site}${localePath("en", entry.path)}`,
          fr: `${site}${localePath("fr", entry.path)}`,
        },
      },
    })),
  );
}
