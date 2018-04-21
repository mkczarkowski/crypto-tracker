import React from 'react';
import PropTypes from 'prop-types';

import styles from './Coin.css';
import CoinListCell from '../CoinListCell/CoinListCell';
import CoinListRow from '../CoinListRow/CoinListRow';

import formatAsCurrency from '../../../shared/utils/helpers';

const Coin = ({ symbol, name, price, change, cap, supply, acronym }) => (
  <CoinListRow>
    <CoinListCell isLarge>
      <img
        src={symbol}
        alt={`${name}'s symbol`}
        className={styles['coin-symbol']}
      />
      <div>{name}</div>
    </CoinListCell>
    <CoinListCell>{formatAsCurrency(price)}</CoinListCell>
    <CoinListCell>
      <p
        className={
          change >= 0
            ? styles['percent-change--plus']
            : styles['percent-change--minus']
        }
      >
        {change} %
      </p>
    </CoinListCell>
    <CoinListCell>{formatAsCurrency(cap)}</CoinListCell>
    <CoinListCell>
      {formatAsCurrency(supply)}
      {` ${acronym}`}
    </CoinListCell>
  </CoinListRow>
);

Coin.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  change: PropTypes.number.isRequired,
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  supply: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  acronym: PropTypes.string.isRequired,
};

export default Coin;
