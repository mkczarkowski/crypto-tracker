import React from 'react';
import PropTypes from 'prop-types';

import Coin from './Coin/Coin';
import CoinListHead from './CoinListHead/CoinListHead';

const CoinList = ({ cryptos }) => {
  const isListEmpty = cryptos.length === 0;
  const renderCoin = crypto => <Coin {...crypto} key={crypto.acronym} />;
  const coinList = isListEmpty ? (
    <p style={{ marginTop: '3%', textAlign: 'center', fontSize: '1.2em' }}>
      Brak wyników dla wprowadzonej frazy.
    </p>
  ) : (
    cryptos.map(renderCoin)
  );

  return (
    <div>
      <CoinListHead />
      {coinList}
    </div>
  );
};

CoinList.propTypes = {
  cryptos: PropTypes.arrayOf(PropTypes.object),
};

CoinList.defaultProps = {
  cryptos: [],
};

export default CoinList;
