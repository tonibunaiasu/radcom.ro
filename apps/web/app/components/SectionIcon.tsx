import {
  Activity,
  Globe2,
  Layers3,
  Network,
  Route
} from "lucide-react";

export function SectionIcon({ name }: { name: string }) {
  const lower = name.toLowerCase();
  const Icon =
    lower.includes("transport")
      ? Route
      : lower.includes("infrastructure")
      ? Network
      : lower.includes("advantages")
      ? Activity
      : lower.includes("development")
      ? Layers3
      : Globe2;

  return (
    <span className="section-icon" aria-hidden="true">
      <Icon size={22} strokeWidth={1.6} />
    </span>
  );
}
