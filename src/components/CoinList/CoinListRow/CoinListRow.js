import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './styled/Wrapper';

const CoinListRow = ({ dataCy, children }) => (
  <StyledWrapper data-cy={dataCy}>{children}</StyledWrapper>
);

CoinListRow.propTypes = {
  dataCy: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CoinListRow;
