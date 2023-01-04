import styles from './Footer.module.css';

import GitHub from './GitHub';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <GitHub />
    </footer>
  );
}
