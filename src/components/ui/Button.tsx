import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "quiet";
type Size = "sm" | "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  // Solid amber. Dark text keeps contrast well above AA on the brand colour.
  primary:
    "bg-brand text-[#0a0c10] font-semibold hover:bg-brand-bright active:bg-brand shadow-[0_0_0_1px_rgba(245,179,36,0.35),0_8px_24px_-8px_rgba(245,179,36,0.45)] hover:shadow-[0_0_0_1px_rgba(255,201,77,0.5),0_10px_30px_-8px_rgba(245,179,36,0.6)]",
  secondary:
    "bg-surface-2 text-ink font-medium border border-line-strong hover:border-line-bright hover:bg-surface-3",
  ghost:
    "text-ink font-medium border border-line hover:border-line-strong hover:bg-surface-2",
  quiet:
    "text-ink-muted font-medium hover:text-ink underline-offset-4 hover:underline decoration-brand/60",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm gap-1.5 rounded-lg",
  md: "h-11 px-5 text-[0.9375rem] gap-2 rounded-lg",
  lg: "h-[3.25rem] px-6.5 text-base gap-2 rounded-xl",
};

const BASE =
  "inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 select-none disabled:opacity-50 disabled:pointer-events-none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  /** Places the icon after the label. Defaults to true for arrow icons. */
  iconAfter?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

type ButtonAsButton = CommonProps & {
  href?: never;
} & Omit<ComponentProps<"button">, "className" | "children">;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconAfter,
    className = "",
    children,
  } = props;

  const showAfter =
    iconAfter ?? (icon === "arrow-right" || icon === "arrow-up-right");

  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  const inner = (
    <>
      {icon && !showAfter ? (
        <Icon name={icon} className="size-[1.15em] shrink-0" />
      ) : null}
      <span>{children}</span>
      {icon && showAfter ? (
        <Icon
          name={icon}
          className="size-[1.15em] shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5"
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, icon: _i, iconAfter: _ia, className: _c, children: _ch, ...rest } = props;

    if (external) {
      return (
        <a
          href={href}
          className={`group/btn ${classes}`}
          rel="noopener noreferrer"
          target="_blank"
          {...rest}
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={`group/btn ${classes}`} {...rest}>
        {inner}
      </Link>
    );
  }

  const { variant: _v, size: _s, icon: _i, iconAfter: _ia, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;

  return (
    <button className={`group/btn ${classes}`} {...rest}>
      {inner}
    </button>
  );
}
