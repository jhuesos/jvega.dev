import { Header } from '@/components/Header/Header';
import styles from './page.module.css';

export { metadata } from './page.metadata';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header centered />
    </div>
  );
}
