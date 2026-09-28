import { ArrowRight } from 'lucide-react'
import styles from './Button.module.css'

/**
 * Bouton pilule de la marque.
 * variant     : "wine" (défaut) | "forest" | "outline" | "ghost" | "light"
 * size        : "md" | "lg"
 * loading     : affiche `loadingText` + spinner en fondu enchaîné
 * Rend un <a> si `href` est fourni, sinon un <button>.
 */
export default function Button({
  href,
  variant = 'wine',
  size = 'md',
  arrow = false,
  block = false,
  loading = false,
  loadingText,
  className = '',
  children,
  ...rest
}) {
  const Tag = href ? 'a' : 'button'
  const classes = [styles.button, className].filter(Boolean).join(' ')

  return (
    <Tag
      href={href}
      className={classes}
      data-variant={variant}
      data-size={size}
      data-block={block || undefined}
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      {...rest}
    >
      <span className={styles.content}>
        <span className={styles.label}>{children}</span>
        {arrow && <ArrowRight className={styles.arrow} size={18} strokeWidth={1.6} aria-hidden="true" />}
      </span>
      {loadingText && (
        <span className={styles.busy} aria-hidden={!loading}>
          <span className={styles.spinner} aria-hidden="true" />
          {loadingText}
        </span>
      )}
    </Tag>
  )
}
