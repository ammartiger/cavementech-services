/**
 * Emits a JSON-LD block.
 *
 * The payload is serialised with JSON.stringify and `<` escaped so a stray
 * angle bracket in content can never break out of the script element. All data
 * passed here originates from in-repo content modules, never user input.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
