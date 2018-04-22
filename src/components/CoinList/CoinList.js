import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import Coin from './Coin/Coin';
import CoinListHead from './CoinListHead/CoinListHead';

const NoResults = styled.p`
  margin-top: 3%;
  text-align: center;
  font-size: 1.2em;
`;

const CoinList = ({ cryptos }) => {
  const isListEmpty = cryptos.length === 0;
  const renderCoin = crypto => <Coin {...crypto} key={crypto.acronym} />;
  const coinList = isListEmpty ? (
    <NoResults>Brak wyników dla wprowadzonej frazy.</NoResults>
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
