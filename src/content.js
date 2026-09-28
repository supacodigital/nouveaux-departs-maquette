/* ==========================================================================
   Contenu de la maquette — tout le texte éditable est ici.
   Les liens de paiement pointent vers des pages de paiement SIMULÉES
   (#/paiement/…, #/reserver/…) : aucune transaction réelle.
   ========================================================================== */

import {
  BookOpen,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Heart,
  MessageCircle,
  Search,
  Target,
  Users,
} from 'lucide-react'

import heroImg from './assets/images/hero.webp'
import aboutImg from './assets/images/about.webp'
import teaImg from './assets/images/tea.webp'
import mugImg from './assets/images/mug.webp'
import bibleImg from './assets/images/bible.webp'

export const images = { hero: heroImg, about: aboutImg, tea: teaImg, mug: mugImg, bible: bibleImg }

export const brand = {
  name: 'Nouveaux Départs',
  tagline: 'Petits pas, grands changements',
  role: 'Coaching de vie chrétien pour femmes',
  email: 'bonjour@nouveauxdeparts.com',
}

export const nav = [
  { label: 'Accompagnements', href: '#offres' },
  { label: 'Le programme', href: '#programme' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Questions', href: '#faq' },
]

/* ---- Offres (fidèles à la maquette cliente) ----------------------------- */

export const offers = [
  {
    slug: 'seance-individuelle',
    kind: 'paid',
    theme: 'rose',
    eyebrow: 'Accompagnement individuel',
    title: 'Séance individuelle',
    subtitle: 'Un temps pour toi, pour avancer concrètement.',
    features: [
      { icon: MessageCircle, text: 'Écoute et conseils personnalisés' },
      { icon: Target, text: 'Des solutions adaptées à ta situation' },
      { icon: Heart, text: "Un plan d'action clair" },
    ],
    duration: '1 h 30',
    price: 150,
    cta: 'Réserver ma séance',
    href: '#/paiement/seance-individuelle',
    motto: ['Écouter', 'Comprendre', 'Avancer'],
    image: heroImg,
    checkout: {
      summary: 'Une séance de 1 h 30 en visio, rien que pour toi.',
      includes: [
        'Séance de 1 h 30 en visioconférence',
        'Un plan d’action personnalisé envoyé après la séance',
        'Un suivi par e-mail pendant 7 jours',
      ],
      next: [
        'Tu reçois un e-mail de confirmation avec ton reçu.',
        'Tu choisis le créneau qui te convient dans le lien envoyé.',
        'On se retrouve en visio — prévois un carnet et un moment calme.',
      ],
    },
  },
  {
    slug: 'programme-14-jours',
    kind: 'paid',
    theme: 'sage',
    featured: true,
    badge: 'Le plus complet',
    eyebrow: "Programme d'accompagnement",
    title: 'Programme 14 jours',
    subtitle: 'Un parcours intensif pour te recentrer, te relever et créer de vrais changements.',
    features: [
      { icon: ChartNoAxesColumnIncreasing, text: 'Un suivi personnalisé pendant 14 jours' },
      { icon: BookOpen, text: 'Des enseignements bibliques et des exercices pratiques' },
      { icon: Users, text: 'Un soutien quotidien et des échanges' },
      { icon: Heart, text: "Un plan d'action pour une vie plus libre et alignée" },
    ],
    duration: '14 jours',
    price: 350,
    cta: 'Rejoindre le programme',
    href: '#/paiement/programme-14-jours',
    motto: ['Petits pas, grands changements'],
    image: bibleImg,
    checkout: {
      summary: '14 jours d’accompagnement intensif, enseignements et suivi quotidien.',
      includes: [
        'Un appel de lancement de 1 h en visio',
        '14 jours de contenus : enseignements bibliques et exercices',
        'Un soutien quotidien par message',
        'Un bilan final et ton plan d’action pour la suite',
      ],
      next: [
        'Tu reçois un e-mail de bienvenue avec ton reçu.',
        'Tu réserves ton appel de lancement.',
        'Ton parcours de 14 jours démarre le lundi suivant.',
      ],
    },
  },
  {
    slug: 'appel-decouverte',
    kind: 'free',
    theme: 'blush',
    eyebrow: 'Appel découverte',
    title: 'Appel découverte',
    subtitle: 'Échangeons ensemble pour voir comment je peux t’accompagner.',
    features: [
      { icon: Search, text: 'Un échange de 30 minutes' },
      { icon: Heart, text: 'Pour faire le point sur ta situation' },
      { icon: CalendarDays, text: 'Sans engagement' },
      { icon: Users, text: 'Pour voir la solution la plus adaptée pour toi' },
    ],
    duration: '30 minutes',
    price: 0,
    cta: 'Réserver mon appel',
    href: '#/reserver/appel-decouverte',
    motto: ['Échanger', 'Clarifier', 'Avancer'],
    image: teaImg,
    checkout: {
      summary: '30 minutes pour faire connaissance, en visio ou par téléphone.',
      includes: ['Un échange de 30 minutes', 'Gratuit et sans engagement', 'En visio ou par téléphone'],
    },
  },
]

export const getOffer = (slug) => offers.find((offer) => offer.slug === slug)

/* ---- Méthode ------------------------------------------------------------- */

export const method = [
  {
    word: 'Écouter',
    text: 'Un espace sûr, sans jugement, où tu peux enfin déposer ce que tu portes.',
  },
  {
    word: 'Comprendre',
    text: 'Mettre des mots sur ce qui te freine, à la lumière de la Parole et de ton histoire.',
  },
  {
    word: 'Avancer',
    text: 'Des étapes concrètes, à ton rythme, pour une vie plus libre et alignée.',
  },
]

/* ---- Pour qui ------------------------------------------------------------ */

export const forWhom = [
  'Tu te sens dispersée, fatiguée, et tu as besoin de te recentrer.',
  'Tu traverses une saison de doute ou de transition et tu ne sais plus par où commencer.',
  'Tu veux reprendre confiance en toi et en ce que Dieu a déposé en toi.',
  'Tu as envie de discipline et de constance, sans te juger.',
  'Tu cherches un accompagnement qui unit foi et actions concrètes.',
]

/* ---- Programme 14 jours : les 4 étapes (les livres de la maquette) ------- */

export const programSteps = [
  {
    days: 'Jours 1 — 3',
    title: 'Nouveaux départs',
    text: 'Faire le point, déposer le passé et poser l’intention de ton parcours.',
  },
  {
    days: 'Jours 4 — 7',
    title: 'Discipline',
    text: 'Installer des rituels simples et tenables qui nourrissent ton esprit et ta foi.',
  },
  {
    days: 'Jours 8 — 11',
    title: 'Confiance',
    text: 'Déconstruire les pensées qui te limitent et oser ce qui compte pour toi.',
  },
  {
    days: 'Jours 12 — 14',
    title: 'Liberté',
    text: 'Ancrer tes changements et repartir avec un plan d’action clair pour la suite.',
  },
]

/* ---- Témoignages — EXEMPLES À REMPLACER par de vrais retours clientes ----- */

export const testimonials = [
  {
    quote:
      'Je suis arrivée épuisée et perdue. En une séance, j’ai retrouvé de la clarté et surtout de la paix. Je suis repartie avec un vrai plan.',
    name: 'Sarah M.',
    detail: 'Séance individuelle',
  },
  {
    quote:
      'Le programme de 14 jours a changé mes matins. Les enseignements sont profonds, et le soutien quotidien m’a portée quand j’avais envie de lâcher.',
    name: 'Aïcha K.',
    detail: 'Programme 14 jours',
  },
  {
    quote:
      'L’appel découverte m’a mise tout de suite en confiance. Aucune pression, juste une vraie écoute. Je me suis sentie comprise.',
    name: 'Nadège L.',
    detail: 'Appel découverte',
  },
]

/* ---- FAQ ----------------------------------------------------------------- */

export const faq = [
  {
    q: 'Comment se déroulent les séances ?',
    a: 'Toutes les séances ont lieu en visioconférence, depuis chez toi. Tu reçois le lien de connexion par e-mail après ta réservation. Prévois simplement un moment calme et de quoi noter.',
  },
  {
    q: 'Par quoi commencer si j’hésite ?',
    a: 'L’appel découverte est fait pour ça. En 30 minutes, gratuitement et sans engagement, on fait le point ensemble et je te conseille l’accompagnement le plus adapté — même si ce n’est pas avec moi.',
  },
  {
    q: 'Faut-il être chrétienne pour être accompagnée ?',
    a: 'L’accompagnement s’appuie sur des valeurs et des enseignements bibliques. Tu es la bienvenue quel que soit ton cheminement, tant que cette approche résonne avec toi.',
  },
  {
    q: 'Combien de temps demande le programme 14 jours ?',
    a: 'Compte environ 20 à 30 minutes par jour : un enseignement, un exercice pratique et un temps d’échange. Le parcours est pensé pour s’intégrer dans une vie déjà bien remplie.',
  },
  {
    q: 'Mes échanges restent-ils confidentiels ?',
    a: 'Absolument. Tout ce que tu partages reste strictement entre nous. La confiance est la base de tout accompagnement.',
  },
  {
    q: 'Puis-je déplacer ma séance ?',
    a: 'Oui, tu peux déplacer ta séance gratuitement jusqu’à 24 h avant le rendez-vous, directement depuis ton e-mail de confirmation.',
  },
]

export const verse = {
  text: 'Voici, je vais faire une chose nouvelle, sur le point d’arriver : ne la connaîtrez-vous pas ?',
  ref: 'Ésaïe 43.19',
}
