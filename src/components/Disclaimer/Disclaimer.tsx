import styles from './Disclaimer.module.css';

interface DisclaimerProps {
  children: React.ReactNode;
}

export function Disclaimer({ children }: DisclaimerProps) {
  return (
    <div className={styles.disclaimer}>
      <div className={styles.exclamation}>!</div>
      <div className={styles.message}>{children}</div>
    </div>
  );
}
