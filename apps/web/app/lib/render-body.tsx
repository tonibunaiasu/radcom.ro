export function renderBody(text: string) {
  const blocks = text
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    if (block.startsWith("### ")) {
      return (
        <h4 key={`h4-${index}`} className="section-subtitle">
          {block.replace(/^###\s+/, "")}
        </h4>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h3 key={`h3-${index}`} className="section-title">
          {block.replace(/^##\s+/, "")}
        </h3>
      );
    }
    return (
      <p key={`p-${index}`} className="section-lead">
        {block}
      </p>
    );
  });
}
