import { images, verse } from '../../content.js'
import Reveal from '../../components/Reveal/Reveal.jsx'
import { Eyebrow } from '../../components/SectionHeading/SectionHeading.jsx'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section} id="a-propos" aria-labelledby="about-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.visual}>
          <div className={styles.backdrop} aria-hidden="true" />
          <img
            src={images.about}
            alt="Portrait de la coach, souriante, en tenue beige"
            width="1000"
            height="1500"
            loading="lazy"
          />
        </Reveal>

        <div className={styles.copy}>
          <Reveal>
            <Eyebrow>À propos</Eyebrow>
            <h2 className={styles.title} id="about-title">
              Moi aussi, j’ai eu besoin d’un <em>nouveau départ</em>.
            </h2>
          </Reveal>

          <Reveal className={styles.body} delay={80}>
            <p>
              Il y a quelques années, je me suis retrouvée épuisée, dispersée, à courir après tout sauf l’essentiel.
              C’est en revenant à la Parole, pas à pas, que j’ai retrouvé la paix — et une direction claire.
            </p>
            <p>
              Aujourd’hui, j’accompagne les femmes qui traversent ces mêmes saisons. Mon rôle : t’écouter sans jugement,
              t’aider à comprendre ce qui se joue, et avancer avec toi vers une vie plus libre et alignée.
            </p>
          </Reveal>

          <Reveal as="figure" className={styles.verse} delay={140}>
            <blockquote>
              <p>« {verse.text} »</p>
            </blockquote>
            <figcaption>{verse.ref}</figcaption>
          </Reveal>

          <Reveal delay={200}>
            <p className={styles.signature}>Avec toi, pas à pas</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
