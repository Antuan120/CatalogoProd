export const formatCurrency = (value: number, locale = 'es-CO', currency = 'COP') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency, maximumFractionDigits: 0 }).format(value)
