import { useEffect } from 'react'
import { useRoute } from './lib/router.js'
import { getOffer } from './content.js'
import Home from './pages/Home.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'
import Booking from './pages/Booking/Booking.jsx'

function resolve(path) {
  const [, section, slug] = path.split('/')
  const offer = getOffer(slug)
  if (section === 'paiement' && offer?.kind === 'paid') return <Checkout key={slug} offer={offer} />
  if (section === 'reserver' && offer?.kind === 'free') return <Booking key={slug} offer={offer} />
  return null
}

export default function App() {
  const { path, anchor } = useRoute()
  const page = path === '/' ? null : resolve(path)

  // Changement de page : on repart du haut, ou de l'ancre demandée au retour sur l'accueil
  useEffect(() => {
    if (page) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    if (anchor) document.getElementById(anchor)?.scrollIntoView()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  return page ?? <Home />
}
