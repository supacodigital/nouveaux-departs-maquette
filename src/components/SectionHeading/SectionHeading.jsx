import Reveal from '../Reveal/Reveal.jsx'
import styles from './SectionHeading.module.css'

export default function SectionHeading({ eyebrow, title, lead, align = 'center', id }) {
  return (
    <Reveal className={styles.heading} data-align={align}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </Reveal>
  )
}

export function Eyebrow({ children, className = '' }) {
  return <p className={[styles.eyebrow, className].filter(Boolean).join(' ')}>{children}</p>
}
