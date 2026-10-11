import { BlogPostView, blogPostMetadata, blogPostStaticParams } from "@/app/_views/BlogPostView";

export async function generateStaticParams() {
  return blogPostStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string | string[] }> }) {
  return blogPostMetadata("en", params);
}

export default async function Blog({ params }: { params: Promise<{ slug: string | string[] }> }) {
  return <BlogPostView locale="en" params={params} />;
}
