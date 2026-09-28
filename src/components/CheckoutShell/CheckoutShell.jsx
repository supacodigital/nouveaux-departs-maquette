import { ArrowLeft, LockKeyhole } from 'lucide-react'
import { brand } from '../../content.js'
import styles from './CheckoutShell.module.css'

/**
 * Coque commune aux pages de paiement / réservation simulées.
 * Bandeau "maquette" permanent + mise en page récapitulatif | formulaire.
 */
export default function CheckoutShell({ theme, summary, secureLabel = 'Paiement sécurisé', children }) {
  return (
    <div className={styles.page} data-theme={theme}>
      <p className={styles.banner} role="note">
        <span className={styles.bannerTag}>Maquette</span>
        <span>Mode démonstration — aucun paiement réel n’est effectué, aucune donnée n’est envoyée.</span>
      </p>

      <div className={styles.layout}>
        <aside className={styles.summary} aria-label="Récapitulatif">
          <div className={styles.summaryInner}>
            <a href="#offres" className={styles.back}>
              <span className={styles.backIcon} aria-hidden="true">
                <ArrowLeft size={16} strokeWidth={1.8} />
              </span>
              <span className={styles.backBrand}>{brand.name}</span>
            </a>

            {summary}

            <p className={styles.legal}>
              <LockKeyhole size={14} strokeWidth={1.6} aria-hidden="true" />
              <span>{secureLabel}</span>
              <span aria-hidden="true">·</span>
              <a href="#">Conditions</a>
              <span aria-hidden="true">·</span>
              <a href="#">Confidentialité</a>
            </p>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.mainInner}>{children}</div>
        </main>
      </div>
    </div>
  )
}
