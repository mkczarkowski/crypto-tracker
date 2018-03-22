import React from "react";
import PropTypes from "prop-types";

import Coin from "./Coin/Coin";

const CoinList = ({ cryptos }) => {
  return cryptos.map(crypto => <Coin {...crypto} key={crypto.acronym} />);
};

CoinList.propTypes = {
  cryptos: PropTypes.arrayOf(PropTypes.object)
};

CoinList.defaultProps = {
  cryptos: []
};

export default CoinList;
