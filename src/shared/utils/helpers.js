export default function formatAsCurrency(value) {
  const currencyFormatRegex = /\B(?=(\d{3})+(?!\d))/g;
  return `$${String(value)
    .replace(currencyFormatRegex, ' ')
    .trim()}`;
}
