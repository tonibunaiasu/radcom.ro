import { redirect } from "next/navigation";
import { getLocale } from "../../lib/locale";

export default async function SolutiiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  const locale = getLocale({ lang });
  redirect(`/${locale}/servicii`);
}
