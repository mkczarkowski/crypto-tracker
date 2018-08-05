import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper } from './styled/Wrapper';

const CoinListCell = ({ isLarge, isHeader, children }) => (
  <StyledWrapper isLarge={isLarge} isHeader={isHeader}>
    {children}
  </StyledWrapper>
);

CoinListCell.propTypes = {
  isLarge: PropTypes.bool,
  isHeader: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CoinListCell.defaultProps = {
  isLarge: false,
  isHeader: false,
};

export default CoinListCell;
