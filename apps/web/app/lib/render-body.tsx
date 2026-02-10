export function renderBody(text: string) {
  const blocks = text
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

  const renderInlineBold = (value: string) => {
    const parts = value.split("**");
    if (parts.length === 1) return value;
    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <strong key={`b-${index}`}>{part}</strong>
      ) : (
        <span key={`t-${index}`}>{part}</span>
      )
    );
  };

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
        {renderInlineBold(block)}
      </p>
    );
  });
}
