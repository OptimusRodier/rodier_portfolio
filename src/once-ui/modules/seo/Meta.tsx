import { Metadata as NextMetadata } from "next";

export interface MetaProps {
  title: string;
  description: string;
  baseURL: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  author?: {
    name: string;
    url?: string;
  };
  /** Paths of the same page in each language, e.g. { en: "/about", fr: "/fr/about" } */
  alternates?: { en: string; fr: string };
  locale?: "en" | "fr";
}

export function generateMetadata({
  title,
  description,
  baseURL,
  path = "",
  type = "website",
  image,
  publishedTime,
  author,
  alternates,
  locale,
}: MetaProps): NextMetadata {
  const normalizedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const isFullUrl = (url: string) => /^https?:\/\//.test(url);

  const ogImage = image
    ? isFullUrl(image)
      ? image
      : `${normalizedBaseURL}${image.startsWith("/") ? image : `/${image}`}`
    : `${normalizedBaseURL}/og?title=${encodeURIComponent(title)}`;

  const url = `${normalizedBaseURL}${normalizedPath}`;

  const abs = (p: string) => `${normalizedBaseURL}${p.startsWith("/") ? p : `/${p}`}`;

  return {
    title,
    description,
    ...(alternates
      ? {
          alternates: {
            canonical: url,
            languages: {
              en: abs(alternates.en),
              fr: abs(alternates.fr),
              "x-default": abs(alternates.en),
            },
          },
        }
      : {}),
    openGraph: {
      title,
      description,
      type,
      ...(locale ? { locale: locale === "fr" ? "fr_FR" : "en_US" } : {}),
      ...(publishedTime && type === "article" ? { publishedTime } : {}),
      url,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(author ? { authors: [{ name: author.name, url: author.url }] } : {}),
  };
}

export const Meta = {
  generate: generateMetadata,
};

export default Meta;