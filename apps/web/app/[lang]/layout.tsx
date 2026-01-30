export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ro" }];
}

export default function LangLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
