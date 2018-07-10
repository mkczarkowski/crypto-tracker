import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from 'react-spinkit';

import Coin from './Coin/Coin';
import CoinListHead from './CoinListHead/CoinListHead';

const NoResults = styled.p`
  margin-top: 3%;
  font-size: 1.2em;
  text-align: center;
`;

export const NO_RESULTS_MESSAGE = 'Brak wyników dla wprowadzonej frazy.';

const CenteredSpinner = styled(Spinner)`
  margin: 3%;
  text-align: center;
`;

const CoinList = ({ cryptos, isLoading }) => {
  const isListEmpty = cryptos.length === 0;
  const renderCoin = crypto => <Coin {...crypto} key={crypto.acronym} />;
  const coinList = isListEmpty ? (
    <NoResults>{NO_RESULTS_MESSAGE}</NoResults>
  ) : (
    cryptos.map(renderCoin)
  );

  return (
    <div>
      <CoinListHead />
      <div className="coin-list__content">
        {isLoading ? <CenteredSpinner name="three-bounce" /> : coinList}
      </div>
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
