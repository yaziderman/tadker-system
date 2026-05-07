import React from 'react';
import styles from './Badge.module.css';

export type BadgeTone = 'active' | 'review' | 'expired' | 'rejected' | 'new';

export interface BadgeProps {
  tone?: BadgeTone;
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

const toneClass: Record<BadgeTone, string> = {
  active:   styles.active,
  review:   styles.review,
  expired:  styles.expired,
  rejected: styles.rejected,
  new:      styles.new,
};

export function Badge({ tone = 'new', dot = true, children, className }: BadgeProps) {
  const cls = [styles.badge, toneClass[tone], className].filter(Boolean).join(' ');
  return (
    <span className={cls}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
