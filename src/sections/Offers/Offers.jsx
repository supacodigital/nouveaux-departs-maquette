import { LockKeyhole } from 'lucide-react'
import { offers } from '../../content.js'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import OfferCard from '../../components/OfferCard/OfferCard.jsx'
import styles from './Offers.module.css'

export default function Offers() {
  return (
    <section className={styles.section} id="offres" aria-labelledby="offers-title">
      <div className="container">
        <SectionHeading
          id="offers-title"
          eyebrow="Accompagnements"
          title={
            <>
              Choisis l’accompagnement <em>qui te ressemble</em>
            </>
          }
          lead="Trois façons d’avancer ensemble. Tu hésites ? Commence par l’appel découverte, il est offert."
        />

        <div className={styles.grid}>
          {offers.map((offer, index) => (
            <Reveal key={offer.slug} delay={index * 90} className={styles.cell}>
              <OfferCard offer={offer} />
            </Reveal>
          ))}
        </div>

        <p className={styles.secure}>
          <LockKeyhole size={16} strokeWidth={1.6} aria-hidden="true" />
          Paiement sécurisé par carte · Confirmation immédiate par e-mail
        </p>
      </div>
    </section>
  )
}
