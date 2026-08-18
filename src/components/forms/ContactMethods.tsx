import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { contactLinks, site } from "@/content/site";

/**
 * Direct contact channels, presented ahead of the form.
 *
 * Deliberately first on the page and deliberately large: for the Pakistani
 * market a phone call or a WhatsApp message converts far better than a
 * fourteen-field form, and a visitor with an active incident should never have
 * to scroll past a form to find a phone number.
 */

type Method = {
  id: string;
  icon: IconName;
  label: string;
  value: string;
  href: string;
  note: string;
  external?: boolean;
  featured?: boolean;
};

const METHODS: Method[] = [
  {
    id: "phone",
    icon: "phone",
    label: "Call us",
    value: site.contact.phone,
    href: contactLinks.tel,
    note: "Fastest route for anything urgent",
    featured: true,
  },
  {
    id: "whatsapp",
    icon: "mail",
    label: "WhatsApp",
    value: site.contact.phone,
    href: contactLinks.whatsapp,
    note: "Message us directly, any time",
    external: true,
    featured: true,
  },
  {
    id: "email",
    icon: "mail",
    label: "Email",
    value: site.contact.email,
    href: contactLinks.mailto,
    note: "Best for detailed requirements",
  },
];

/** WhatsApp's glyph isn't in the icon set — this is the official mark shape. */
function WhatsAppGlyph({ className = "size-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.470 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22.5l5.77-1.51a9.9 9.9 0 0 0 4.27.96h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.14a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.05-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23a8.23 8.23 0 0 1 0 16.46Z" />
    </svg>
  );
}

export function ContactMethods() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {METHODS.map((method, i) => (
          <Reveal key={method.id} delay={i * 70}>
            <a
              href={method.href}
              {...(method.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={`group flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ${
                method.featured
                  ? "border-brand/35 bg-linear-to-br from-brand/10 to-transparent hover:border-brand/60"
                  : "border-line-strong bg-surface-2/50 hover:border-line-bright"
              }`}
            >
              <span
                className={`inline-flex size-12 items-center justify-center rounded-xl border ${
                  method.featured
                    ? "border-brand/30 bg-brand/12 text-brand"
                    : "border-line-strong bg-surface-3 text-ink-muted"
                }`}
              >
                {method.id === "whatsapp" ? (
                  <WhatsAppGlyph className="size-6" />
                ) : (
                  <Icon name={method.icon} className="size-6" />
                )}
              </span>

              <p className="mono-label mt-5 text-ink-subtle">{method.label}</p>
              <p
                className={`mt-2 text-lg font-medium tracking-tight ${
                  method.featured ? "text-brand" : "text-ink"
                } break-all`}
              >
                {method.value}
              </p>
              <p className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-ink-subtle">
                {method.note}
              </p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink-muted transition-colors group-hover:text-brand">
                {method.id === "phone"
                  ? "Tap to call"
                  : method.id === "whatsapp"
                    ? "Open WhatsApp"
                    : "Compose email"}
                <Icon
                  name="arrow-right"
                  className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {/* Availability + location */}
      <Reveal delay={140} className="mt-5">
        <div className="flex flex-col gap-4 rounded-xl border border-line bg-surface-2/40 px-5 py-4 sm:flex-row sm:items-center sm:gap-8">
          <p className="flex items-center gap-2.5 text-sm text-ink-muted">
            <Icon name="clock" className="size-4 shrink-0 text-brand/70" />
            {site.contact.businessHours}
          </p>
          <p className="flex items-center gap-2.5 text-sm text-ink-muted">
            <Icon name="map-pin" className="size-4 shrink-0 text-brand/70" />
            {site.contact.address}
          </p>
          <p className="flex items-center gap-2.5 text-sm text-ink-subtle sm:ml-auto">
            <span className="relative flex size-2 shrink-0">
              <span className="motion-flow absolute inline-flex size-full animate-blink rounded-full bg-active/70" />
              <span className="relative inline-flex size-2 rounded-full bg-active" />
            </span>
            Serving organisations across Pakistan
          </p>
        </div>
      </Reveal>
    </div>
  );
}
