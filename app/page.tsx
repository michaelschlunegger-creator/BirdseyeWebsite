import { PageView } from "@/components/page-view";
import { getPage } from "@/lib/site-content";

export default function Home() {
  return <PageView page={getPage("/")!} />;
}
