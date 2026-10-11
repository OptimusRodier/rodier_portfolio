import { HomeView, homeMetadata } from "@/app/_views/HomeView";

export async function generateMetadata() {
  return homeMetadata("fr");
}

export default function Home() {
  return <HomeView locale="fr" />;
}
