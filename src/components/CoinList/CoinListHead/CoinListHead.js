import React from 'react';

import CoinListCell from '../CoinListCell/CoinListCell';
import CoinListRow from '../CoinListRow/CoinListRow';

const CoinListHead = () => (
  <CoinListRow>
    <CoinListCell isLarge hasBoldText hasThinBorder>
      Name
    </CoinListCell>
    <CoinListCell hasBoldText hasThinBorder>
      Price
    </CoinListCell>
    <CoinListCell hasBoldText hasThinBorder>
      Change (24h)
    </CoinListCell>
    <CoinListCell hasBoldText hasThinBorder>
      Market cap
    </CoinListCell>
    <CoinListCell hasBoldText hasThinBorder>
      Circulating supply
    </CoinListCell>
  </CoinListRow>
);

export default CoinListHead;
