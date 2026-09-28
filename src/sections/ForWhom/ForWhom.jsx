import { forWhom, images } from '../../content.js'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import styles from './ForWhom.module.css'

export default function ForWhom() {
  return (
    <section className={styles.section} aria-labelledby="forwhom-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.visual}>
          <img
            src={images.tea}
            alt="Une tasse de thé posée près de fleurs roses"
            width="1000"
            height="1250"
            loading="lazy"
          />
          <p className={styles.script} aria-hidden="true">
            Prends soin de toi
          </p>
        </Reveal>

        <div className={styles.content}>
          <SectionHeading
            id="forwhom-title"
            align="left"
            eyebrow="Pour qui ?"
            title={
              <>
                Cet accompagnement est <em>pour toi</em> si…
              </>
            }
          />

          <ul className={styles.list}>
            {forWhom.map((item, index) => (
              <Reveal as="li" key={item} className={styles.item} delay={index * 60}>
                <span className={styles.bullet} aria-hidden="true">
                  <svg viewBox="0 0 32 32" width="14" height="14">
                    <path
                      d="M16 25.5s-8.5-4.9-8.5-11.2A4.8 4.8 0 0 1 16 11.6a4.8 4.8 0 0 1 8.5 2.7c0 6.3-8.5 11.2-8.5 11.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
