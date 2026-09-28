import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { brand, faq } from '../../content.js'
import Reveal from '../../components/Reveal/Reveal.jsx'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import styles from './Faq.module.css'

function Item({ item, open, onToggle }) {
  const id = useId()
  return (
    <li className={styles.item} data-open={open}>
      <h3>
        <button
          type="button"
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          onClick={onToggle}
        >
          <span>{item.q}</span>
          <span className={styles.icon} aria-hidden="true">
            <Plus size={18} strokeWidth={1.6} />
          </span>
        </button>
      </h3>
      <div className={styles.panel} id={`${id}-panel`} role="region" aria-labelledby={`${id}-trigger`}>
        <div className={styles.panelInner} inert={!open}>
          <p>{item.a}</p>
        </div>
      </div>
    </li>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.aside}>
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow="Questions fréquentes"
            title={
              <>
                Tout ce que tu te <em>demandes</em>
              </>
            }
          />
          <Reveal as="p" className={styles.contact} delay={80}>
            Une autre question ? Écris-moi à{' '}
            <a href={`mailto:${brand.email}`} className={styles.mail}>
              {brand.email}
            </a>
          </Reveal>
        </div>

        <Reveal as="ul" className={styles.list} delay={80}>
          {faq.map((item, index) => (
            <Item
              key={item.q}
              item={item}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
