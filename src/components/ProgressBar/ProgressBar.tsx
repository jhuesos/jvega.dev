import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  percentage: number;
}

export function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div
      className={styles.bar}
      style={{ '--progress': `${percentage}%` } as React.CSSProperties}
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
