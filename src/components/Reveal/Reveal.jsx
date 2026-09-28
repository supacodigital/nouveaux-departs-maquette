import { useEffect, useRef, useState } from 'react'
import styles from './Reveal.module.css'

/**
 * Apparition douce au scroll (une seule fois).
 * `delay` en ms permet de créer un léger décalage (stagger) entre éléments voisins.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, className].filter(Boolean).join(' ')}
      data-visible={visible}
      style={{ ...style, '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
