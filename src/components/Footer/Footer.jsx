import { brand, nav, offers } from '../../content.js'
import Logo from '../Logo/Logo.jsx'
import styles from './Footer.module.css'

const socials = [
  {
    label: 'Instagram',
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    label: 'Facebook',
    icon: (
      <path
        d="M14 8.5V7c0-.8.3-1.3 1.4-1.3H17V2.6c-.6-.1-1.6-.2-2.7-.2-2.8 0-4.3 1.6-4.3 4.4v1.7H7.2v3.2H10V22h4v-10.3h2.9l.4-3.2H14Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: 'YouTube',
    icon: (
      <path
        d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    ),
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo href="#top" />
          <p className={styles.tagline}>{brand.tagline}.</p>
          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.label}>
                <a href="#" className={styles.social} aria-label={social.label}>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.col} aria-label="Plan du site">
          <p className={styles.heading}>Navigation</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.col} aria-label="Accompagnements">
          <p className={styles.heading}>Accompagnements</p>
          <ul>
            {offers.map((offer) => (
              <li key={offer.slug}>
                <a href={offer.href} className={styles.link}>
                  {offer.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <p className={styles.heading}>Contact</p>
          <ul>
            <li>
              <a href={`mailto:${brand.email}`} className={styles.link}>
                {brand.email}
              </a>
            </li>
            <li className={styles.muted}>Séances en visio, partout dans le monde</li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {brand.name}. Tous droits réservés.
        </p>
        <ul className={styles.legal}>
          <li>
            <a href="#" className={styles.link}>
              Mentions légales
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Confidentialité
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              CGV
            </a>
          </li>
        </ul>
        <p className={styles.demo}>Maquette de présentation — paiements simulés</p>
      </div>
    </footer>
  )
}
