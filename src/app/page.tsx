import { HomeView, homeMetadata } from "@/app/_views/HomeView";

export async function generateMetadata() {
  return homeMetadata("en");
}

export default function Home() {
  return <HomeView locale="en" />;
}
