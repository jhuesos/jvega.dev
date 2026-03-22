import Image from 'next/image';
import styles from './Header.module.css';

interface HeaderProps {
  centered?: boolean;
}

export function Header({ centered = false }: HeaderProps) {
  return (
    <header className={`${styles.header} ${centered ? styles.centered : ''}`}>
      <div className={styles.container}>
        <div className={styles.nameTitle}>
          <h1>Jaime Vega</h1>
          <h2>
            <span>Front-end engineer / </span>
            <span>Tech lead</span>
          </h2>
        </div>
        <address className={styles.contactInfo}>
          <div className={styles.contactLine}>
            <Image
              src="/icons/email.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
            <a href="mailto:jaime.vega@gmail.com">jaime.vega@gmail.com</a>
          </div>
          <div className={styles.contactLine}>
            <Image
              src="/icons/home.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
            <a href="https://www.jvega.dev">https://www.jvega.dev</a>
          </div>
          <div className={styles.contactLine}>
            <Image
              src="/icons/linkedin.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
            <a
              href="https://linkedin.com/in/jvegadev"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://linkedin.com/in/jvegadev
            </a>
          </div>
        </address>
      </div>
    </header>
  );
}
