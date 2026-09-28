import { images } from '../../content.js'
import Button from '../../components/Button/Button.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import styles from './FinalCta.module.css'

export default function FinalCta() {
  return (
    <section className={styles.section} aria-labelledby="final-title">
      <div className="container">
        <Reveal className={styles.panel}>
          <img className={styles.image} src={images.mug} alt="" width="1800" height="2250" loading="lazy" />
          <div className={styles.copy}>
            <p className={styles.script} aria-hidden="true">
              Parlons de toi
            </p>
            <h2 className={styles.title} id="final-title">
              Faisons le point ensemble, en toute douceur.
            </h2>
            <p className={styles.text}>
              30 minutes pour m’expliquer où tu en es et voir, ensemble, le chemin le plus adapté pour toi.
            </p>
            <Button href="#/reserver/appel-decouverte" size="lg" arrow>
              Réserver mon appel
            </Button>
            <p className={styles.meta}>
              <span>30 minutes</span>
              <span aria-hidden="true">·</span>
              <span>Gratuit</span>
              <span aria-hidden="true">·</span>
              <span>Sans engagement</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
