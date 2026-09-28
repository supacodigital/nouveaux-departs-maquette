# Nouveaux Départs — maquette landing page

Landing page de présentation (Vite + React + CSS Modules, sans Tailwind).
**Les paiements et réservations sont simulés** : aucune donnée n'est envoyée, aucun débit.

## Lancer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # version statique dans dist/ (hébergeable partout, chemins relatifs)
```

## Pages

| URL | Rôle |
| --- | --- |
| `#/` | Landing page |
| `#/paiement/seance-individuelle` | Faux lien de paiement — 150 $ |
| `#/paiement/programme-14-jours` | Faux lien de paiement — 350 $ |
| `#/reserver/appel-decouverte` | Réservation simulée de l'appel gratuit (créneaux + .ics) |

## Où modifier quoi

- **Textes, prix, offres, FAQ, témoignages** : `src/content.js`
- **Couleurs, typos, espacements, animations** : `src/styles/tokens.css`
- **Photos** : `src/assets/images/` (photos Unsplash libres de droits, à remplacer par celles de la cliente)

## À remplacer avant mise en ligne

- Témoignages d'exemple (`testimonials` dans `src/content.js`)
- Photos de la coach (`hero.webp`, `about.webp`)
- E-mail de contact et liens réseaux sociaux / mentions légales
- Liens de paiement : remplacer les `href` des offres par les vrais liens (Stripe Payment Links, etc.)
- Retirer la balise `noindex` dans `index.html`
