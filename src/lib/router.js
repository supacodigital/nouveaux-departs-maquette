import { useSyncExternalStore } from 'react'

/*
  Routeur minimal basé sur le hash.
  - "#/paiement/…" et "#/reserver/…" → pages de paiement simulées
  - "#offres", "#faq"… → ancres de la page d'accueil (gérées par le navigateur)
  Le hash fonctionne sur n'importe quel hébergement statique, sans réécriture serveur.
*/

const subscribe = (callback) => {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

const getHash = () => window.location.hash

export function useRoute() {
  const hash = useSyncExternalStore(subscribe, getHash, () => '')
  if (!hash.startsWith('#/')) return { path: '/', anchor: hash.slice(1) }
  return { path: hash.slice(1), anchor: '' }
}
