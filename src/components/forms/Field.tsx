"use client";

import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

/**
 * Accessible form field primitives.
 *
 * Every control is bound to a real <label>. Errors are associated via
 * aria-describedby and announced with role="alert", and invalid controls carry
 * aria-invalid so assistive technology reports the state rather than relying on
 * the red border alone.
 */

const CONTROL_BASE =
  "w-full rounded-lg border bg-surface-2/60 px-3.5 py-2.5 text-[0.9375rem] text-ink placeholder:text-ink-faint transition-colors outline-none focus:border-brand/60 focus:bg-surface-2";

function controlClasses(hasError: boolean) {
  return `${CONTROL_BASE} ${
    hasError
      ? "border-sev-critical/60 focus:border-sev-critical"
      : "border-field hover:border-line-bright"
  }`;
}

export function FieldWrapper({
  id,
  label,
  error,
  hint,
  required,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-[0.8125rem] font-medium text-ink-muted"
      >
        {label}
        {required ? (
          <span className="ml-1 text-brand" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1.5 text-ink-faint">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-faint">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-1.5 flex items-center gap-1.5 text-xs text-sev-critical"
        >
          <Icon name="alert" className="size-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  required,
  type = "text",
  placeholder,
  autoComplete,
  className = "",
  maxLength,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "url";
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  maxLength?: number;
}) {
  return (
    <FieldWrapper
      id={id}
      label={label}
      error={error}
      hint={hint}
      required={required}
      className={className}
    >
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        aria-required={required}
        className={controlClasses(!!error)}
      />
    </FieldWrapper>
  );
}

export function TextArea({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  required,
  placeholder,
  rows = 5,
  maxLength = 4000,
  className = "",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  className?: string;
}) {
  return (
    <FieldWrapper
      id={id}
      label={label}
      error={error}
      hint={hint}
      required={required}
      className={className}
    >
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        aria-required={required}
        className={`${controlClasses(!!error)} resize-y`}
      />
    </FieldWrapper>
  );
}

export function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  error,
  hint,
  required,
  placeholder = "Select…",
  className = "",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  error?: string;
  hint?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <FieldWrapper
      id={id}
      label={label}
      error={error}
      hint={hint}
      required={required}
      className={className}
    >
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          aria-required={required}
          className={`${controlClasses(!!error)} appearance-none pr-10 ${
            value ? "" : "text-ink-faint"
          }`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-surface-2">
              {option}
            </option>
          ))}
        </select>
        <Icon
          name="chevron-down"
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink-subtle"
        />
      </div>
    </FieldWrapper>
  );
}

/** Multi-select checkbox group, rendered as a labelled fieldset. */
export function CheckboxGroup({
  legend,
  options,
  selected,
  onToggle,
  error,
  required,
  className = "",
}: {
  legend: string;
  options: readonly string[];
  selected: string[];
  onToggle: (option: string) => void;
  error?: string;
  required?: boolean;
  className?: string;
}) {
  const errorId = "services-error";
  return (
    <fieldset className={className}>
      <legend className="mb-3 text-[0.8125rem] font-medium text-ink-muted">
        {legend}
        {required ? (
          <span className="ml-1 text-brand" aria-hidden="true">
            *
          </span>
        ) : null}
      </legend>
      <div
        className="grid gap-2 sm:grid-cols-2"
        aria-describedby={error ? errorId : undefined}
      >
        {options.map((option) => {
          const checked = selected.includes(option);
          return (
            <label
              key={option}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3.5 py-2.5 text-[0.875rem] transition-colors ${
                checked
                  ? "border-brand/50 bg-brand/8 text-ink"
                  : "border-field bg-surface-2/40 text-ink-muted hover:border-line-bright"
              }`}
            >
              <input
                type="checkbox"
                name="services"
                value={option}
                checked={checked}
                onChange={() => onToggle(option)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`flex size-4 shrink-0 items-center justify-center rounded border transition-colors ${
                  checked
                    ? "border-brand bg-brand text-[#0a0c10]"
                    : "border-field"
                }`}
              >
                {checked ? (
                  <Icon name="check" className="size-3" strokeWidth={3} />
                ) : null}
              </span>
              {option}
            </label>
          );
        })}
      </div>
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="mt-2 flex items-center gap-1.5 text-xs text-sev-critical"
        >
          <Icon name="alert" className="size-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

/**
 * Honeypot. Hidden from sighted users and from assistive technology, and
 * excluded from the tab order — a human will never fill it in, so a non-empty
 * value is a reliable bot signal.
 */
export function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] top-0 size-px overflow-hidden">
      <label htmlFor="company-website-hp">Do not fill this in</label>
      <input
        id="company-website-hp"
        name="company_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
