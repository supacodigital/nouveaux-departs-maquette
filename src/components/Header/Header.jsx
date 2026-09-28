import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../../content.js'
import Logo from '../Logo/Logo.jsx'
import Button from '../Button/Button.jsx'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={styles.header} data-scrolled={scrolled || open} data-open={open}>
      <div className={`container ${styles.inner}`}>
        <Logo href="#top" />

        <nav className={styles.nav} aria-label="Navigation principale">
          <ul className={styles.links}>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href="#/reserver/appel-decouverte" className={styles.cta}>
            Appel découverte
          </Button>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      <div id="menu-mobile" className={styles.sheet} hidden={!open}>
        <ul className={`container ${styles.sheetLinks}`}>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.sheetLink} onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
          <li className={styles.sheetCta}>
            <Button href="#/reserver/appel-decouverte" block arrow onClick={close}>
              Réserver mon appel découverte
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
