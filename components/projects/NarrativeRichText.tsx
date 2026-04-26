/**
 * Renders narrative copy and strips markdown-style bold markers.
 */
export function NarrativeRichText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <span key={i}>{part.slice(2, -2)}</span>;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}
