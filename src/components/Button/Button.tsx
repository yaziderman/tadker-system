import React from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'gold' | 'destructive' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  full?: boolean;
}

const variantClass: Record<ButtonVariant, string> = {
  primary:     styles.primary,
  secondary:   styles.secondary,
  gold:        styles.gold,
  destructive: styles.destructive,
  ghost:       styles.ghost,
};

const sizeClass: Record<ButtonSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  full = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const cls = [
    styles.btn,
    variantClass[variant],
    sizeClass[size],
    full ? styles.full : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} disabled={disabled} {...props}>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  );
}
