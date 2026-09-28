import { testimonials } from '../../content.js'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className="container">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Témoignages"
          title={
            <>
              Elles ont osé <em>avancer</em>
            </>
          }
        />

        <ul className={styles.grid}>
          {testimonials.map((item, index) => (
            <Reveal as="li" key={item.quote} delay={index * 90} className={styles.card}>
              <figure>
                <span className={styles.mark} aria-hidden="true">
                  “
                </span>
                <blockquote className={styles.quote}>
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className={styles.author}>
                  <span className={styles.avatar} aria-hidden="true">
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.detail}>{item.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
