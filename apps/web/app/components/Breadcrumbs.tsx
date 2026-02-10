type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const content = item.href ? (
          <a href={item.href}>{item.label}</a>
        ) : (
          <span aria-current="page">{item.label}</span>
        );
        return (
          <span className="breadcrumb-item" key={`${item.label}-${index}`}>
            {content}
            {index < items.length - 1 ? <span className="breadcrumb-sep">/</span> : null}
          </span>
        );
      })}
    </nav>
  );
}
