import React from 'react';
import styles from './Hero.module.css';

export type HeroSize = 'sm' | 'md' | 'lg';

export interface HeroProps {
  title: string;
  titleAr?: string;
  subtitle?: string;
  subtitleAr?: string;
  badge?: string;
  actions?: React.ReactNode;
  size?: HeroSize;
  className?: string;
}

const sizeClass: Record<HeroSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function Hero({
  title,
  titleAr,
  subtitle,
  subtitleAr,
  badge,
  actions,
  size = 'md',
  className,
}: HeroProps) {
  return (
    <section
      className={[styles.hero, sizeClass[size], className].filter(Boolean).join(' ')}
      aria-label="Page hero"
    >
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        {badge && <div className={styles.badge}>{badge}</div>}
        <h1 className={styles.title}>{title}</h1>
        {titleAr && (
          <p className={styles.titleAr} dir="rtl" lang="ar">{titleAr}</p>
        )}
        {(subtitle || subtitleAr) && (
          <div className={styles.subtitleBlock}>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {subtitleAr && (
              <p className={styles.subtitleAr} dir="rtl" lang="ar">{subtitleAr}</p>
            )}
          </div>
        )}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </section>
  );
}
