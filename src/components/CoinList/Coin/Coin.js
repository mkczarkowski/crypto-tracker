import React from 'react';
import PropTypes from 'prop-types';

import CoinListRow from '../CoinListRow/CoinListRow';
import CoinListCell from '../CoinListCell/CoinListCell';
import PercentChange from './styled/PercentChange';
import Symbol from './styled/Symbol';

import { formatAsCurrency } from '../../../shared/utils/helpers';

const Coin = ({ symbolPath, name, price, change, cap, supply, acronym }) => (
  <CoinListRow dataCy="coin">
    <CoinListCell isLarge>
      <Symbol src={symbolPath} alt={`${name}'s symbol`} />
      <div id="name">{name}</div>
    </CoinListCell>
    <CoinListCell>{formatAsCurrency(price)}</CoinListCell>
    <CoinListCell>
      <PercentChange change={change}>{change} %</PercentChange>
    </CoinListCell>
    <CoinListCell>{formatAsCurrency(cap)}</CoinListCell>
    <CoinListCell>
      {formatAsCurrency(supply)}
      {` ${acronym}`}
    </CoinListCell>
  </CoinListRow>
);

Coin.propTypes = {
  symbolPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  change: PropTypes.number.isRequired,
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  supply: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  acronym: PropTypes.string.isRequired,
};

export default Coin;
