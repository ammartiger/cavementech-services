import { Icon } from "./Icon";

/**
 * Banner shown at the top of every legal page.
 *
 * The brief forbids inventing legal text, and doing so would be actively
 * harmful — a plausible-looking privacy policy that has not been reviewed
 * creates real regulatory exposure. These pages therefore set out the structure
 * and the questions each section must answer, and say clearly that the binding
 * text has not been drafted yet.
 */
export function LegalNotice({ document }: { document: string }) {
  return (
    <div className="rounded-xl border border-brand/30 bg-brand/6 p-6">
      <div className="flex items-start gap-3">
        <Icon name="alert" className="mt-0.5 size-5 shrink-0 text-brand" />
        <div>
          <p className="text-[0.9375rem] font-medium text-ink">
            Placeholder — not yet legally reviewed
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            This {document} is an outline of the sections required, not binding
            legal text. It must be drafted and reviewed by a qualified legal
            adviser against the jurisdictions you operate in before this site
            goes live publicly. Publishing an unreviewed policy is a compliance
            risk in itself.
          </p>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-8 first:border-t-0">
      <h2 className="text-h3 text-ink">{heading}</h2>
      <div className="mt-4 space-y-3 text-[0.9375rem] leading-relaxed text-ink-muted">
        {children}
      </div>
    </section>
  );
}
