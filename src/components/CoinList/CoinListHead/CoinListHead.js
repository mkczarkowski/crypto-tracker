import React from 'react';

import CoinListCell from '../CoinListCell/CoinListCell';
import CoinListRow from '../CoinListRow/CoinListRow';

const CoinListHead = () => (
  <CoinListRow>
    <CoinListCell isLarge isHeader>
      Name
    </CoinListCell>
    <CoinListCell isHeader>Price</CoinListCell>
    <CoinListCell isHeader>Change (24h)</CoinListCell>
    <CoinListCell isHeader>Market cap</CoinListCell>
    <CoinListCell isHeader>Circulating supply</CoinListCell>
  </CoinListRow>
);

export default CoinListHead;
