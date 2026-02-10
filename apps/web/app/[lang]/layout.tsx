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
    metadataBase: new URL(process.env.SITE_URL || "https://dezign.institute"),
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
  const baseUrl = process.env.SITE_URL || "https://dezign.institute";
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RADCOM",
    url: baseUrl,
    logo: `${baseUrl}/logo-blue.webp`,
    sameAs: [
      "https://www.linkedin.com/company/radcom-romania/",
      "https://www.facebook.com/RadcomRomania",
      "https://www.instagram.com/radcom.ro/"
    ]
  };
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
