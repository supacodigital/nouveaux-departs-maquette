/* Créneaux fictifs pour la maquette : déterministes (même résultat à chaque visite). */

const TIMES = ['09:00', '09:30', '10:30', '11:00', '13:30', '14:00', '15:30', '17:00', '18:30', '19:00']
const DAYS_SHOWN = 10

const toKey = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

const seed = (text) => [...text].reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) % 9973, 7)

/** Les 10 prochains jours ouvrés (dimanche exclu), à partir de demain. */
export function upcomingDays(from = new Date()) {
  const days = []
  const cursor = new Date(from.getFullYear(), from.getMonth(), from.getDate() + 1)
  while (days.length < DAYS_SHOWN) {
    if (cursor.getDay() !== 0) days.push({ key: toKey(cursor), date: new Date(cursor) })
    cursor.setDate(cursor.getDate() + 1)
  }
  return days
}

/** Créneaux d'une journée, dont environ un tiers déjà réservés. */
export function slotsFor(dayKey) {
  const base = seed(dayKey)
  return TIMES.map((time, index) => ({ time, available: (base + index * 7) % 3 !== 0 }))
}

/** "09:30" → "9 h 30" */
export const formatTime = (time) => {
  const [h, m] = time.split(':')
  return `${Number(h)} h ${m}`
}

export const endTime = (time, minutes = 30) => {
  const [h, m] = time.split(':').map(Number)
  const total = h * 60 + m + minutes
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`
}

/** Fichier .ics pour « Ajouter à mon agenda » */
export function downloadIcs({ dayKey, time, title, description }) {
  const stamp = (key, hhmm) => `${key.replaceAll('-', '')}T${hhmm.replace(':', '')}00`
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Nouveaux Departs//Maquette//FR',
    'BEGIN:VEVENT',
    `UID:${dayKey}-${time}@nouveauxdeparts.maquette`,
    `DTSTAMP:${now}`,
    `DTSTART:${stamp(dayKey, time)}`,
    `DTEND:${stamp(dayKey, endTime(time))}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }))
  const link = Object.assign(document.createElement('a'), { href: url, download: 'appel-decouverte.ics' })
  link.click()
  URL.revokeObjectURL(url)
}
