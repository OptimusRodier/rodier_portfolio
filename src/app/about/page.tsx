import { AboutView, aboutMetadata } from "@/app/_views/AboutView";

export async function generateMetadata() {
  return aboutMetadata("en");
}

export default function About() {
  return <AboutView locale="en" />;
}
