import React from 'react';
import { Icon, type IconName } from '../Icon';
import styles from './ServiceCard.module.css';

export interface ServiceCardProps {
  icon: IconName;
  title: string;
  titleAr?: string;
  description: string;
  days: number | string;
  fee: string;
  featured?: boolean;
  onClick?: () => void;
  actionLabel?: string;
  actionLabelAr?: string;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  titleAr,
  description,
  days,
  fee,
  featured,
  onClick,
  actionLabel = 'Apply / View details',
  actionLabelAr,
  className,
}: ServiceCardProps) {
  const cls = [
    styles.card,
    featured ? styles.featured : '',
    onClick ? styles.clickable : '',
    className ?? '',
  ].filter(Boolean).join(' ');

  return (
    <article className={cls} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
      <div className={styles.iconWrap}>
        <Icon name={icon} size={24} />
      </div>
      <div className={styles.heading}>
        <h3 className={styles.title}>{title}</h3>
        {titleAr && <p className={styles.titleAr} dir="rtl">{titleAr}</p>}
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <Icon name="calendar" size={14} />
          <strong>{days}</strong> working days
        </span>
        <span className={styles.metaItem}>
          <strong>{fee}</strong>
        </span>
      </div>
      <span className={styles.action}>
        {actionLabelAr && <span dir="rtl" className={styles.actionAr}>{actionLabelAr}</span>}
        {actionLabel}
        <Icon name="chevron-right" size={14} />
      </span>
    </article>
  );
}
