import { Check } from 'lucide-react'
import { formatAmount } from '../../lib/format.js'
import styles from './OrderSummary.module.css'

export default function OrderSummary({ offer, eyebrow = 'Tu réserves', extra }) {
  const free = offer.price === 0

  return (
    <div className={styles.summary}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{offer.title}</h1>
        <p className={styles.amount}>{free ? 'Gratuit' : formatAmount(offer.price)}</p>
        <p className={styles.text}>{offer.checkout.summary}</p>
      </div>

      <div className={styles.item}>
        <img className={styles.thumb} src={offer.image} alt="" width="56" height="56" />
        <div className={styles.itemBody}>
          <p className={styles.itemName}>{offer.title}</p>
          <p className={styles.itemMeta}>{offer.duration}</p>
        </div>
        <p className={styles.itemPrice}>{free ? '0,00 $' : formatAmount(offer.price)}</p>
      </div>

      {extra}

      <ul className={styles.includes}>
        {offer.checkout.includes.map((line) => (
          <li key={line}>
            <Check size={16} strokeWidth={2} aria-hidden="true" />
            {line}
          </li>
        ))}
      </ul>

      {!free && (
        <dl className={styles.totals}>
          <div>
            <dt>Sous-total</dt>
            <dd>{formatAmount(offer.price)}</dd>
          </div>
          <div className={styles.total}>
            <dt>Total dû aujourd’hui</dt>
            <dd>{formatAmount(offer.price)}</dd>
          </div>
        </dl>
      )}
    </div>
  )
}
