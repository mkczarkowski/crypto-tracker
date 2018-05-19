export function formatAsCurrency(value) {
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


export function mapFetchedCryptos(fetchedCryptos) {
  return Object.keys(fetchedCryptos).map(cryptoId => {
    const crypto = fetchedCryptos[cryptoId];

    const { name, symbol: acronym, id, circulating_supply: supply } = crypto;
    const symbolPath = getIconPath(id);
    const quotesInUsd = crypto.quotes.USD;
    const { price, market_cap: cap, percent_change_1h: change } = quotesInUsd;

    return { name, acronym, supply, symbolPath, price, change, cap };
  });
}
function getIconPath(id) {
  return `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;
}


