"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPath, withLocalePath } from "../lib/locale";

type SubNavItem = {
  label: string;
  href: string;
};

export function SubNav({ items }: { items: SubNavItem[] }) {
  const pathname = usePathname();
  const lang = getLocaleFromPath(pathname);

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
