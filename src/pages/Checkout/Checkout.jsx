import { useState } from 'react'
import { CreditCard, LockKeyhole } from 'lucide-react'
import { formatAmount } from '../../lib/format.js'
import CheckoutShell from '../../components/CheckoutShell/CheckoutShell.jsx'
import OrderSummary from '../../components/OrderSummary/OrderSummary.jsx'
import Field from '../../components/Field/Field.jsx'
import Button from '../../components/Button/Button.jsx'
import SuccessPanel from '../../components/SuccessPanel/SuccessPanel.jsx'
import styles from './Checkout.module.css'

// Carte de démonstration : les champs carte sont verrouillés, rien n'est saisi ni transmis.
const DEMO_CARD = { number: '4242 4242 4242 4242', expiry: '12 / 34', cvc: '123' }
const COUNTRIES = ['Canada', 'France', 'Belgique', 'Suisse', 'Côte d’Ivoire', 'Sénégal', 'Cameroun', 'Autre pays']
const PROCESSING_MS = 1600
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Indique une adresse e-mail valide.'
  if (values.name.trim().length < 2) errors.name = 'Indique ton prénom et ton nom.'
  if (!values.terms) errors.terms = 'Merci d’accepter les conditions pour continuer.'
  return errors
}

export default function Checkout({ offer }) {
  const [values, setValues] = useState({ email: '', name: '', country: 'Canada', terms: false })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle') // idle | processing | success
  const [order, setOrder] = useState(null)

  const amount = formatAmount(offer.price)
  const variant = offer.theme === 'sage' ? 'forest' : 'wine'

  const update = (field) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const next = { ...values, [field]: value }
    setValues(next)
    if (submitted) setErrors(validate(next))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (status !== 'idle') return
    setSubmitted(true)
    const nextErrors = validate(values)
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      event.currentTarget.elements.namedItem(firstInvalid)?.focus()
      return
    }

    setStatus('processing')
    window.setTimeout(() => {
      setOrder({
        number: `ND-${Date.now().toString(36).slice(-6).toUpperCase()}`,
        date: new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long', timeStyle: 'short' }).format(new Date()),
      })
      setStatus('success')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, PROCESSING_MS)
  }

  const firstName = values.name.trim().split(/\s+/)[0]

  return (
    <CheckoutShell theme={offer.theme} summary={<OrderSummary offer={offer} />}>
      {status === 'success' ? (
        <SuccessPanel
          title={`Merci ${firstName} !`}
          text={`Ton paiement de ${amount} est confirmé. Un reçu a été envoyé à ${values.email.trim()}.`}
        >
          <dl className={styles.receipt}>
            <div>
              <dt>Commande</dt>
              <dd>{order.number}</dd>
            </div>
            <div>
              <dt>Accompagnement</dt>
              <dd>{offer.title}</dd>
            </div>
            <div>
              <dt>Montant</dt>
              <dd>{amount}</dd>
            </div>
            <div>
              <dt>Date</dt>
              <dd>{order.date}</dd>
            </div>
            <div>
              <dt>Moyen de paiement</dt>
              <dd>Carte de test •••• 4242</dd>
            </div>
          </dl>

          <div className={styles.next}>
            <h3 className={styles.nextTitle}>Et maintenant ?</h3>
            <ol className={styles.nextList}>
              {offer.checkout.next.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <Button href="#top" variant={variant} block arrow>
            Retour à l’accueil
          </Button>
          <p className={styles.demoNote}>Simulation : aucune somme n’a été débitée.</p>
        </SuccessPanel>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formHead}>
            <h2 className={styles.formTitle}>Paiement</h2>
            <p className={styles.formText}>Finalise ta réservation en toute sécurité.</p>
          </div>

          <Field
            label="Adresse e-mail"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="toi@exemple.com"
            value={values.email}
            onChange={update('email')}
            error={errors.email}
            hint="Ton reçu et les prochaines étapes arriveront ici."
          />

          <fieldset className={styles.card}>
            <legend className={styles.cardLegend}>
              <span>Informations de carte</span>
              <span className={styles.testChip}>Carte de test</span>
            </legend>
            <div className={styles.cardBox}>
              <div className={styles.cardRow}>
                <CreditCard size={18} strokeWidth={1.6} className={styles.cardIcon} aria-hidden="true" />
                <input
                  className={styles.cardInput}
                  aria-label="Numéro de carte (démonstration)"
                  value={DEMO_CARD.number}
                  readOnly
                />
                <span className={styles.brands} aria-hidden="true">
                  <span className={styles.brandVisa}>VISA</span>
                  <span className={styles.brandMc}>
                    <i />
                    <i />
                  </span>
                </span>
              </div>
              <div className={styles.cardSplit}>
                <input
                  className={styles.cardInput}
                  aria-label="Date d’expiration (démonstration)"
                  value={DEMO_CARD.expiry}
                  readOnly
                />
                <input
                  className={styles.cardInput}
                  aria-label="Cryptogramme (démonstration)"
                  value={DEMO_CARD.cvc}
                  readOnly
                />
              </div>
            </div>
            <p className={styles.cardHint}>
              Maquette : carte fictive pré-remplie, aucune donnée bancaire n’est demandée.
            </p>
          </fieldset>

          <Field
            label="Nom sur la carte"
            name="name"
            autoComplete="name"
            placeholder="Prénom Nom"
            value={values.name}
            onChange={update('name')}
            error={errors.name}
          />

          <Field
            as="select"
            label="Pays"
            name="country"
            value={values.country}
            onChange={update('country')}
            autoComplete="country-name"
          >
            {COUNTRIES.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </Field>

          <div className={styles.terms} data-invalid={Boolean(errors.terms) || undefined}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="terms"
                checked={values.terms}
                onChange={update('terms')}
                aria-invalid={Boolean(errors.terms) || undefined}
                aria-describedby={errors.terms ? 'terms-error' : undefined}
              />
              <span className={styles.checkboxBox} aria-hidden="true" />
              <span>
                J’accepte les <a href="#">conditions générales de vente</a> et la{' '}
                <a href="#">politique de confidentialité</a>.
              </span>
            </label>
            {errors.terms && (
              <p id="terms-error" className={styles.termsError} role="alert">
                {errors.terms}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant={variant}
            size="lg"
            block
            className={styles.pay}
            loading={status === 'processing'}
            loadingText="Traitement…"
          >
            <LockKeyhole size={16} strokeWidth={1.8} aria-hidden="true" />
            Payer {amount}
          </Button>

          <p className={styles.secure}>
            <LockKeyhole size={14} strokeWidth={1.6} aria-hidden="true" />
            Paiement chiffré · Maquette : aucune somme ne sera débitée
          </p>
        </form>
      )}
    </CheckoutShell>
  )
}
