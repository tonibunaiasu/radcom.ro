import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [];
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;

  redirect(`/${lang}/industries/${slug}`);
}
