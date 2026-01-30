const variants = [
  "radial",
  "stack",
  "grid",
  "circuit",
  "pulse"
] as const;

const paths: Record<(typeof variants)[number], string> = {
  radial:
    "M12 2a10 10 0 100 20 10 10 0 000-20Zm0 4a6 6 0 110 12 6 6 0 010-12Z",
  stack:
    "M12 2l9 5-9 5-9-5 9-5Zm0 7l9 5-9 5-9-5 9-5Zm0 7l9 5-9 5-9-5 9-5Z",
  grid:
    "M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z",
  circuit:
    "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Zm-7-1h2V11h6v2h-8Zm2-7h2v2H9V6Z",
  pulse:
    "M3 12h4l2-4 4 8 2-4h6"
};

export function SectionIcon({ name }: { name: string }) {
  const index = Math.abs(
    Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0)
  );
  const variant = variants[index % variants.length];

  return (
    <span className="section-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d={paths[variant]} />
      </svg>
    </span>
  );
}
