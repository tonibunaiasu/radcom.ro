import { redirect } from "next/navigation";

export default async function SolutiiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  redirect(`/${lang}/industries`);
}
