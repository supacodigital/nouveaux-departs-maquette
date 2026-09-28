import { useEffect, useRef } from 'react'
import styles from './SuccessPanel.module.css'

/** Écran de confirmation après paiement / réservation simulés. */
export default function SuccessPanel({ title, text, children }) {
  const headingRef = useRef(null)

  // Annonce le changement d'écran aux lecteurs d'écran et au clavier
  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  return (
    <div className={styles.panel}>
      <div className={styles.badge} aria-hidden="true">
        <svg viewBox="0 0 52 52" width="52" height="52">
          <circle className={styles.circle} cx="26" cy="26" r="24" fill="none" />
          <path className={styles.check} d="M16 27.5 22.5 34 36.5 19.5" fill="none" />
        </svg>
      </div>
      <h2 className={styles.title} ref={headingRef} tabIndex={-1}>
        {title}
      </h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.body}>{children}</div>
    </div>
  )
}
