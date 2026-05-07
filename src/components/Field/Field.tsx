import React from 'react';
import styles from './Field.module.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface FieldProps {
  label: string;
  labelAr?: string;
  required?: boolean;
  error?: string;
  errorAr?: string;
  help?: string;
  helpAr?: string;
  children?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  placeholder?: string;
  dir?: 'ltr' | 'rtl';
  options?: SelectOption[] | string[];
  disabled?: boolean;
  className?: string;
}

function normaliseOptions(opts: SelectOption[] | string[]): SelectOption[] {
  return opts.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
}

export function Field({
  label,
  labelAr,
  required,
  error,
  errorAr,
  help,
  helpAr,
  children,
  type = 'text',
  id,
  name,
  value,
  defaultValue,
  onChange,
  placeholder,
  dir,
  options,
  disabled,
  className,
}: FieldProps) {
  const isInvalid = Boolean(error);
  const inputCls = [styles.input, isInvalid ? styles.invalid : ''].filter(Boolean).join(' ');

  let control: React.ReactNode;
  if (children) {
    control = children;
  } else if (options) {
    control = (
      <select
        id={id}
        name={name}
        className={inputCls}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
        disabled={disabled}
        aria-invalid={isInvalid}
        aria-describedby={error ? `${id}-error` : help ? `${id}-help` : undefined}
        style={{ direction: dir }}
      >
        {normaliseOptions(options).map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    );
  } else {
    control = (
      <input
        id={id}
        name={name}
        type={type}
        className={inputCls}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={isInvalid}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : help ? `${id}-help` : undefined}
        dir={dir}
      />
    );
  }

  return (
    <div className={[styles.field, className].filter(Boolean).join(' ')}>
      <label htmlFor={id} className={styles.label}>
        <span>
          {label}
          {required && <span className={styles.required} aria-hidden="true"> *</span>}
        </span>
        {labelAr && (
          <span className={styles.labelAr} dir="rtl">{labelAr}</span>
        )}
      </label>
      {control}
      {help && !error && (
        <div id={`${id}-help`} className={styles.help}>
          {help}
          {helpAr && <> · <span dir="rtl" className={styles.arabic}>{helpAr}</span></>}
        </div>
      )}
      {error && (
        <div id={`${id}-error`} className={styles.error} role="alert">
          {errorAr && <span dir="rtl" className={styles.arabic}>{errorAr} · </span>}
          {error}
        </div>
      )}
    </div>
  );
}
