import { method } from '../../content.js'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import styles from './Method.module.css'

export default function Method() {
  return (
    <section className={styles.method} aria-labelledby="method-title">
      <div className="container">
        <SectionHeading
          id="method-title"
          eyebrow="Ma façon d’accompagner"
          title={
            <>
              Une approche douce, <em>en trois temps</em>
            </>
          }
        />

        <ol className={styles.steps}>
          {method.map((step, index) => (
            <Reveal as="li" key={step.word} className={styles.step} delay={index * 90}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.word}>{step.word}</h3>
              <p className={styles.text}>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
