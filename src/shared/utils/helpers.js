export default function formatAsCurrency(value) {
  const currencyFormatRegex = /\B(?=(\d{3})+(?!\d))/g;
  const separator = '.';
  const [wholePart, decimalPart] = String(value).split(separator);

  const wholePartFormattedAsCurrency = wholePart.replace(
    currencyFormatRegex,
    ' ',
  );

  const formattedValue =
    typeof decimalPart !== 'undefined'
      ? [wholePartFormattedAsCurrency, decimalPart].join(separator)
      : wholePartFormattedAsCurrency;

  return `$${formattedValue}`;
}
