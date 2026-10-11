import { BlogView, blogMetadata } from "@/app/_views/BlogView";

export async function generateMetadata() {
  return blogMetadata("fr");
}

export default function Blog() {
  return <BlogView locale="fr" />;
}
