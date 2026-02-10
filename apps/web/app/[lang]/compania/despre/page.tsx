import { getLocale } from "../../../lib/locale";
import { redirect } from "next/navigation";

export default async function DesprePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = getLocale({ lang: lang });
  redirect(`/${locale}/compania/istoric`);
}
