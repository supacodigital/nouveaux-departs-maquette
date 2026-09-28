const priceFormatter = new Intl.NumberFormat('fr-CA', {
  style: 'currency',
  currency: 'CAD',
  currencyDisplay: 'narrowSymbol',
})

/** 150 → "150 $" (affichage marketing, sans décimales) */
export const formatPrice = (amount) => (amount === 0 ? 'Gratuit' : `${amount} $`)

/** 150 → "150,00 $" (affichage paiement) */
export const formatAmount = (amount) => priceFormatter.format(amount)
