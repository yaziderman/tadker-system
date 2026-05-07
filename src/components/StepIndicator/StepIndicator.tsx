import React from 'react';
import { Icon } from '../Icon';
import styles from './StepIndicator.module.css';

export interface Step {
  label: string;
  labelAr?: string;
}

export interface StepIndicatorProps {
  steps: Step[];
  current?: number;
  className?: string;
}

type StepStatus = 'done' | 'current' | 'todo';

export function StepIndicator({ steps, current = 0, className }: StepIndicatorProps) {
  return (
    <nav
      className={[styles.root, className].filter(Boolean).join(' ')}
      aria-label="Application progress"
    >
      <div className={styles.progressLabel}>Application Progress</div>
      <ol className={styles.list}>
        {steps.map((step, i) => {
          const status: StepStatus = i < current ? 'done' : i === current ? 'current' : 'todo';
          const isLast = i === steps.length - 1;
          return (
            <li
              key={i}
              className={[styles.item, styles[status]].join(' ')}
              aria-current={status === 'current' ? 'step' : undefined}
            >
              {!isLast && <span className={styles.connector} aria-hidden="true" />}
              <span className={styles.bullet} aria-hidden="true">
                {status === 'done'
                  ? <Icon name="check" size={14} stroke={2.5} />
                  : i + 1}
              </span>
              <div className={styles.content}>
                <span className={styles.stepLabel}>{step.label}</span>
                {step.labelAr && (
                  <span className={styles.stepLabelAr} dir="rtl">{step.labelAr}</span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
