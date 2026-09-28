import { brand } from '../../content.js'
import styles from './Logo.module.css'

export default function Logo({ href = '#', tone = 'dark' }) {
  return (
    <a href={href} className={styles.logo} data-tone={tone} aria-label={`${brand.name} — accueil`}>
      <span className={styles.mark} aria-hidden="true">
        <svg viewBox="0 0 32 32" width="18" height="18">
          <path
            d="M16 25.5s-8.5-4.9-8.5-11.2A4.8 4.8 0 0 1 16 11.6a4.8 4.8 0 0 1 8.5 2.7c0 6.3-8.5 11.2-8.5 11.2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={styles.word}>{brand.name}</span>
    </a>
  )
}
