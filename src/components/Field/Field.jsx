import { useId } from 'react'
import styles from './Field.module.css'

/**
 * Champ de formulaire accessible (label, aide, erreur reliés à l'input).
 * `as` : "input" | "select" | "textarea"
 */
export default function Field({
  label,
  hint,
  error,
  optional,
  as: Control = 'input',
  className = '',
  children,
  ...props
}) {
  const id = useId()
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined

  return (
    <div className={[styles.field, className].filter(Boolean).join(' ')} data-invalid={Boolean(error) || undefined}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {optional && <span className={styles.optional}>facultatif</span>}
      </label>
      <Control
        id={id}
        className={styles.control}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy}
        {...props}
      >
        {children}
      </Control>
      {hint && !error && (
        <p id={`${id}-hint`} className={styles.hint}>
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
