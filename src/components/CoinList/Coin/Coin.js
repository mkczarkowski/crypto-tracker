import React from 'react';
import PropTypes from 'prop-types';

import CoinListCell from '../CoinListCell/CoinListCell';
import CoinListRow from '../CoinListRow/CoinListRow';

import formatAsCurrency from '../../../shared/utils/helpers';

const percentChangePlusColor = '#04BF12';
const percentChangeMinusColor = '#dd2c00';
const styles = {
  coinSymbol: {
    width: 36,
    height: 36,
    margin: 10,
  },
  percentChangePlus: {
    color: percentChangePlusColor,
  },
  percentChangeMinus: {
    color: percentChangeMinusColor,
  },
};

const Coin = ({ symbolPath, name, price, change, cap, supply, acronym }) => (
  <CoinListRow>
    <CoinListCell isLarge>
      <img
        src={symbolPath}
        alt={`${name}'s symbol`}
        style={styles.coinSymbol}
      />
      <div>{name}</div>
    </CoinListCell>
    <CoinListCell>{formatAsCurrency(price)}</CoinListCell>
    <CoinListCell>
      <div
        style={{
          color:
            change >= 0
              ? styles.percentChangePlus.color
              : styles.percentChangeMinus.color,
        }}
      >
        {change} %
      </div>
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
