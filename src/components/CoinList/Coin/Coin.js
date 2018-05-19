import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import CoinListCell from '../CoinListCell/CoinListCell';
import CoinListRow from '../CoinListRow/CoinListRow';

import { formatAsCurrency } from '../../../shared/utils/helpers';

const Symbol = styled.img`
  width: 36px;
  height: 36px;
  margin: 10px;
`;

const percentChangePlusColor = '#04BF12';
const percentChangeMinusColor = '#dd2c00';
const PercentChange = styled.div`
  color: ${props =>
    props.change > 0 ? percentChangePlusColor : percentChangeMinusColor};
`;

const Coin = ({ symbolPath, name, price, change, cap, supply, acronym }) => (
  <CoinListRow>
    <CoinListCell isLarge>
      <Symbol src={symbolPath} alt={`${name}'s symbol`} />

      <div>{name}</div>
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
