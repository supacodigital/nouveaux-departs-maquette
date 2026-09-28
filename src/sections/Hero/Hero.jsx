import { Check } from 'lucide-react'
import { brand, images } from '../../content.js'
import Button from '../../components/Button/Button.jsx'
import styles from './Hero.module.css'

const reassurance = ['30 minutes offertes', 'Sans engagement', 'En visio, où que tu sois']

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow} style={{ '--i': 0 }}>
            {brand.role}
          </p>
          <h1 className={styles.title} id="hero-title" style={{ '--i': 1 }}>
            Retrouve la paix, la clarté et la <em>confiance</em> d’avancer.
          </h1>
          <p className={styles.lead} style={{ '--i': 2 }}>
            Un accompagnement bienveillant, ancré dans la foi, pour te recentrer, te relever et créer de vrais
            changements à ton rythme.
          </p>

          <div className={styles.ctas} style={{ '--i': 3 }}>
            <Button href="#/reserver/appel-decouverte" size="lg" arrow>
              Réserver mon appel découverte
            </Button>
            <Button href="#offres" size="lg" variant="ghost" arrow>
              Voir les offres
            </Button>
          </div>

          <ul className={styles.reassurance} style={{ '--i': 4 }}>
            {reassurance.map((item) => (
              <li key={item}>
                <Check size={16} strokeWidth={2} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.archOutline} aria-hidden="true" />
          <figure className={styles.arch}>
            <img
              src={images.hero}
              alt="Une femme écrit dans son carnet, dans une lumière douce"
              width="1100"
              height="1648"
              fetchPriority="high"
            />
          </figure>

          <div className={styles.note} aria-hidden="true">
            <span className={styles.noteScript}>Tu n’es pas seule</span>
            <svg viewBox="0 0 32 32" width="18" height="18" className={styles.noteHeart}>
              <path
                d="M16 25.5s-8.5-4.9-8.5-11.2A4.8 4.8 0 0 1 16 11.6a4.8 4.8 0 0 1 8.5 2.7c0 6.3-8.5 11.2-8.5 11.2Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />
            </svg>
          </div>

          <p className={styles.chip}>
            <span>Écouter</span>
            <span aria-hidden="true">·</span>
            <span>Comprendre</span>
            <span aria-hidden="true">·</span>
            <span>Avancer</span>
          </p>
        </div>
      </div>
    </section>
  )
}
