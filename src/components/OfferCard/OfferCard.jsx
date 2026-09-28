import { formatPrice } from '../../lib/format.js'
import Button from '../Button/Button.jsx'
import styles from './OfferCard.module.css'

export default function OfferCard({ offer }) {
  const { theme, featured, badge, eyebrow, title, subtitle, features, duration, price, cta, href, motto } = offer
  const titleId = `offer-${offer.slug}`

  return (
    <article className={styles.card} data-theme={theme} data-featured={featured || undefined} aria-labelledby={titleId}>
      {badge && <span className={styles.badge}>{badge}</span>}

      <header className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h3 className={styles.title} id={titleId}>
          {title}
        </h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </header>

      <ul className={styles.features}>
        {features.map(({ icon: Icon, text }) => (
          <li key={text} className={styles.feature}>
            <span className={styles.icon} aria-hidden="true">
              <Icon size={22} strokeWidth={1.5} />
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>

      <div className={styles.bottom}>
        <p className={styles.pill}>
          <span className={styles.duration}>{duration}</span>
          <span className={styles.rule} aria-hidden="true" />
          <span className={styles.price}>{formatPrice(price)}</span>
        </p>

        <Button href={href} variant={theme === 'sage' ? 'forest' : 'wine'} block arrow>
          {cta}
        </Button>

        <p className={styles.motto}>
          {motto.map((word, index) => (
            <span key={word}>
              {index > 0 && (
                <span className={styles.dot} aria-hidden="true">
                  ·
                </span>
              )}
              {word}
            </span>
          ))}
        </p>
      </div>
    </article>
  )
}
