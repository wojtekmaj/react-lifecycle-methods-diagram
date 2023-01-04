import { wrapper } from './Footer.module.css';

import GitHub from './GitHub';

export default function Footer() {
  return (
    <footer className={wrapper}>
      <GitHub />
    </footer>
  );
}
