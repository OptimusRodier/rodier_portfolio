import { WorkView, workMetadata } from "@/app/_views/WorkView";

export async function generateMetadata() {
  return workMetadata("en");
}

export default function Work() {
  return <WorkView locale="en" />;
}
