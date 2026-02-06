export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ro" }];
}

export async function generateMetadata({
  params
}: {
  params: { lang: string } | Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.lang === "ro" ? "ro" : "en";
  return {
    title: "RADCOM",
    description:
      locale === "ro"
        ? "Soluții integrate pentru transport public"
        : "Integrated solutions for public transport"
  };
}

export default function LangLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
