import { useMemo, useState } from 'react'
import { CalendarDays, CalendarPlus, Clock, Video } from 'lucide-react'
import { brand } from '../../content.js'
import CheckoutShell from '../../components/CheckoutShell/CheckoutShell.jsx'
import OrderSummary from '../../components/OrderSummary/OrderSummary.jsx'
import Field from '../../components/Field/Field.jsx'
import Button from '../../components/Button/Button.jsx'
import SuccessPanel from '../../components/SuccessPanel/SuccessPanel.jsx'
import { downloadIcs, endTime, formatTime, slotsFor, upcomingDays } from './slots.js'
import styles from './Booking.module.css'

const PROCESSING_MS = 1200
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const weekday = new Intl.DateTimeFormat('fr-FR', { weekday: 'short' })
const month = new Intl.DateTimeFormat('fr-FR', { month: 'short' })
const longDate = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

function validate(values, slot) {
  const errors = {}
  if (!slot.time) errors.slot = 'Choisis une date et un horaire.'
  if (values.firstName.trim().length < 2) errors.firstName = 'Indique ton prénom.'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Indique une adresse e-mail valide.'
  return errors
}

export default function Booking({ offer }) {
  const days = useMemo(() => upcomingDays(), [])
  const [slot, setSlot] = useState({ day: days[0], time: null })
  const [values, setValues] = useState({ firstName: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState('idle') // idle | processing | success

  const slots = slotsFor(slot.day.key)
  const slotLabel = slot.time ? `${longDate.format(slot.day.date)} · ${formatTime(slot.time)}` : null

  const pickDay = (day) => setSlot({ day, time: null })
  const pickTime = (time) => {
    const next = { ...slot, time }
    setSlot(next)
    if (submitted) setErrors(validate(values, next))
  }

  const update = (field) => (event) => {
    const next = { ...values, [field]: event.target.value }
    setValues(next)
    if (submitted) setErrors(validate(next, slot))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (status !== 'idle') return
    setSubmitted(true)
    const nextErrors = validate(values, slot)
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      const form = event.currentTarget
      const target =
        firstInvalid === 'slot' ? form.querySelector('[data-slot-group]') : form.elements.namedItem(firstInvalid)
      target?.focus({ preventScroll: true })
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setStatus('processing')
    window.setTimeout(() => {
      setStatus('success')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, PROCESSING_MS)
  }

  const selected = (
    <div className={styles.selected} data-empty={!slot.time || undefined}>
      <CalendarDays size={20} strokeWidth={1.6} aria-hidden="true" />
      <div>
        <p className={styles.selectedLabel}>Ton créneau</p>
        <p className={styles.selectedValue} aria-live="polite">
          {slotLabel ?? 'Choisis une date et un horaire'}
        </p>
      </div>
    </div>
  )

  return (
    <CheckoutShell
      theme={offer.theme}
      secureLabel="Échange confidentiel"
      summary={<OrderSummary offer={offer} eyebrow="Réservation" extra={selected} />}
    >
      {status === 'success' ? (
        <SuccessPanel
          title={`C’est noté, ${values.firstName.trim()} !`}
          text={`Ton appel découverte est réservé. Une confirmation a été envoyée à ${values.email.trim()}.`}
        >
          <ul className={styles.recap}>
            <li>
              <CalendarDays size={18} strokeWidth={1.6} aria-hidden="true" />
              <span className={styles.capitalize}>{longDate.format(slot.day.date)}</span>
            </li>
            <li>
              <Clock size={18} strokeWidth={1.6} aria-hidden="true" />
              {formatTime(slot.time)} – {formatTime(endTime(slot.time))}{' '}
              <span className={styles.muted}>({timeZone})</span>
            </li>
            <li>
              <Video size={18} strokeWidth={1.6} aria-hidden="true" />
              En visio — le lien t’est envoyé par e-mail
            </li>
          </ul>

          <div className={styles.successActions}>
            <Button
              type="button"
              variant="outline"
              block
              onClick={() =>
                downloadIcs({
                  dayKey: slot.day.key,
                  time: slot.time,
                  title: `Appel découverte — ${brand.name}`,
                  description: 'Lien de visio envoyé par e-mail (maquette).',
                })
              }
            >
              <CalendarPlus size={16} strokeWidth={1.8} aria-hidden="true" />
              Ajouter à mon agenda
            </Button>
            <Button href="#top" block arrow>
              Retour à l’accueil
            </Button>
          </div>
          <p className={styles.demoNote}>Simulation : aucune réservation réelle n’a été créée.</p>
        </SuccessPanel>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formHead}>
            <h2 className={styles.formTitle}>Réserve ton appel</h2>
            <p className={styles.formText}>30 minutes, gratuit et sans engagement.</p>
          </div>

          <section className={styles.step} aria-labelledby="step-date">
            <h3 className={styles.stepTitle} id="step-date">
              <span className={styles.stepNum}>1</span> Choisis une date
            </h3>
            <div className={styles.days} role="radiogroup" aria-labelledby="step-date">
              {days.map((day) => {
                const active = day.key === slot.day.key
                return (
                  <button
                    key={day.key}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    className={styles.day}
                    data-active={active || undefined}
                    onClick={() => pickDay(day)}
                    aria-label={longDate.format(day.date)}
                  >
                    <span className={styles.dayWeek}>{weekday.format(day.date).replace('.', '')}</span>
                    <span className={styles.dayNum}>{day.date.getDate()}</span>
                    <span className={styles.dayMonth}>{month.format(day.date).replace('.', '')}</span>
                  </button>
                )
              })}
            </div>
          </section>

          <section className={styles.step} aria-labelledby="step-time">
            <h3 className={styles.stepTitle} id="step-time">
              <span className={styles.stepNum}>2</span> Choisis un horaire
            </h3>
            <p className={styles.zone}>
              <span className={styles.capitalize}>{longDate.format(slot.day.date)}</span> · fuseau {timeZone}
            </p>
            <div
              className={styles.times}
              role="radiogroup"
              aria-labelledby="step-time"
              aria-describedby={errors.slot ? 'slot-error' : undefined}
              tabIndex={-1}
              data-slot-group
            >
              {slots.map(({ time, available }) => {
                const active = slot.time === time
                return (
                  <button
                    key={time}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    className={styles.time}
                    data-active={active || undefined}
                    disabled={!available}
                    onClick={() => pickTime(time)}
                  >
                    {formatTime(time)}
                    {!available && <span className="visually-hidden"> (complet)</span>}
                  </button>
                )
              })}
            </div>
            {errors.slot && (
              <p id="slot-error" className={styles.error} role="alert">
                {errors.slot}
              </p>
            )}
          </section>

          <section className={styles.step} aria-labelledby="step-info">
            <h3 className={styles.stepTitle} id="step-info">
              <span className={styles.stepNum}>3</span> Tes coordonnées
            </h3>
            <div className={styles.fields}>
              <div className={styles.row}>
                <Field
                  label="Prénom"
                  name="firstName"
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={update('firstName')}
                  error={errors.firstName}
                />
                <Field
                  label="Téléphone"
                  optional
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={update('phone')}
                />
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
              />
              <Field
                as="textarea"
                label="Qu’est-ce qui t’amène ?"
                optional
                placeholder="Quelques mots sur ta situation, pour que je prépare notre échange."
                value={values.message}
                onChange={update('message')}
              />
            </div>
          </section>

          <Button
            type="submit"
            size="lg"
            block
            className={styles.submit}
            loading={status === 'processing'}
            loadingText="Réservation…"
          >
            Confirmer mon appel
          </Button>
          <p className={styles.demoNote}>Maquette : aucune réservation réelle ne sera créée.</p>
        </form>
      )}
    </CheckoutShell>
  )
}
