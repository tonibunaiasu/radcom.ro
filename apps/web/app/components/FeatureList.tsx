import { CheckCircle2 } from "lucide-react";

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="product-features">
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>
          <CheckCircle2 size={18} strokeWidth={1.8} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
