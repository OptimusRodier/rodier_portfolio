import { AboutView, aboutMetadata } from "@/app/_views/AboutView";

export async function generateMetadata() {
  return aboutMetadata("fr");
}

export default function About() {
  return <AboutView locale="fr" />;
}
