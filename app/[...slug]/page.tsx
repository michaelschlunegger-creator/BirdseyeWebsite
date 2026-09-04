import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageView } from "@/components/page-view";
import { getPage, pages } from "@/lib/site-content";

type RouteProps = { params: Promise<{ slug: string[] }> };

function routeFromSlug(slug: string[]) {
  return `/${slug.join("/")}/`;
}

export function generateStaticParams() {
  return pages
    .filter((page) => page.route !== "/")
    .map((page) => ({ slug: page.route.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(routeFromSlug(slug));
  if (!page) return {};
  return { title: page.seoTitle, description: page.metaDescription };
}

export default async function ContentPage({ params }: RouteProps) {
  const { slug } = await params;
  const page = getPage(routeFromSlug(slug));
  if (!page) notFound();
  return <PageView page={page} />;
}
