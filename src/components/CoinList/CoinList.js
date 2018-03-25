import React from "react";
import PropTypes from "prop-types";

import Coin from "./Coin/Coin";

const CoinList = ({ cryptos }) => {
  const isListEmpty = cryptos.length === 0;
  const coinList = isListEmpty ? (
        <p>Brak wyników dla wprowadzonej frazy.</p>
    ) : (
        cryptos.map(crypto => <Coin {...crypto} key={crypto.acronym} />)
    );

  return coinList;
};

CoinList.propTypes = {
  cryptos: PropTypes.arrayOf(PropTypes.object)
};

CoinList.defaultProps = {
  cryptos: []
};

export default CoinList;
