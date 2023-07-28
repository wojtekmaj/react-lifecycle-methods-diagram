import { wrapper } from './Footer.module.css';

import GitHub from './GitHub.js';

export default function Footer() {
  return (
    <footer className={wrapper}>
      <GitHub />
    </footer>
  );
}
