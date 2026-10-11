import { ProjectView, projectMetadata, projectStaticParams } from "@/app/_views/ProjectView";

export async function generateStaticParams() {
  return projectStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string | string[] }> }) {
  return projectMetadata("fr", params);
}

export default async function Project({ params }: { params: Promise<{ slug: string | string[] }> }) {
  return <ProjectView locale="fr" params={params} />;
}
