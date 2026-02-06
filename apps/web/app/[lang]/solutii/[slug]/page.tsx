import { redirect } from "next/navigation";
import { getLocale } from "../../../lib/locale";

export async function generateStaticParams() {
  return [];
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;

  const locale = getLocale({ lang });
  const base = locale === "ro" ? "industrii" : "industries";
  redirect(`/${locale}/${base}/${slug}`);
}
