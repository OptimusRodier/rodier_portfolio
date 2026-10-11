import { WorkView, workMetadata } from "@/app/_views/WorkView";

export async function generateMetadata() {
  return workMetadata("fr");
}

export default function Work() {
  return <WorkView locale="fr" />;
}
