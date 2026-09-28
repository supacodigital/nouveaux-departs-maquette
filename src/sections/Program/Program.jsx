import { useState } from 'react'
import { getOffer, programSteps } from '../../content.js'
import { formatPrice } from '../../lib/format.js'
import Button from '../../components/Button/Button.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import { Eyebrow } from '../../components/SectionHeading/SectionHeading.jsx'
import styles from './Program.module.css'

const program = getOffer('programme-14-jours')

export default function Program() {
  // Survol d'une étape → le livre correspondant sort légèrement de la pile
  const [active, setActive] = useState(null)

  return (
    <section className={styles.section} id="programme" aria-labelledby="program-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <Reveal>
            <Eyebrow className={styles.eyebrow}>Le programme 14 jours</Eyebrow>
            <h2 className={styles.title} id="program-title">
              Quatre étapes pour un <em>nouveau départ</em>
            </h2>
            <p className={styles.lead}>
              Un parcours intensif et bienveillant : chaque jour, un enseignement biblique, un exercice concret et mon
              soutien pour tenir le cap.
            </p>
          </Reveal>

          <div className={styles.books} aria-hidden="true">
            {programSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 110} className={styles.bookSlot}>
                <div className={styles.book} data-index={index} data-active={active === index || undefined}>
                  <span>{step.title}</span>
                </div>
              </Reveal>
            ))}
            <span className={styles.pen} />
          </div>
        </div>

        <div className={styles.side}>
          <ol className={styles.steps}>
            {programSteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 80}
                className={styles.step}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
              >
                <p className={styles.days}>{step.days}</p>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className={styles.footer}>
            <p className={styles.price}>
              <span className={styles.priceValue}>{formatPrice(program.price)}</span>
              <span className={styles.priceNote}>pour les 14 jours, tout compris</span>
            </p>
            <Button href={program.href} variant="light" size="lg" arrow>
              {program.cta}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
