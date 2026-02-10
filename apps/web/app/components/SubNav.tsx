"use client";

import { useParams, usePathname } from "next/navigation";
import { getLocaleFromPath, normalizeLocale, withLocalePath } from "../lib/locale";

type SubNavItem = {
  label: string;
  href: string;
};

export function SubNav({ items }: { items: SubNavItem[] }) {
  const pathname = usePathname();
  const params = useParams();
  const paramLang =
    typeof params?.lang === "string"
      ? params.lang
      : Array.isArray(params?.lang)
      ? params?.lang?.[0]
      : undefined;
  const lang = paramLang ? normalizeLocale(paramLang) : getLocaleFromPath(pathname);

  return (
    <div className="subnav">
      <div className="container subnav-inner">
        {items.map((item) => {
          const target = withLocalePath(item.href, lang);
          const isActive = pathname === target;
          return (
            <a
              key={item.href}
              className={`subnav-link${isActive ? " active" : ""}`}
              href={target}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
