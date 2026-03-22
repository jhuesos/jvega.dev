import styles from './Chip.module.css';

interface ChipProps {
  label: string;
}

export function Chip({ label }: ChipProps) {
  return <span className={styles.chip}>{label}</span>;
}
