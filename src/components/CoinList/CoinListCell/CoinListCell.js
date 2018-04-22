import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const cellPadding = 10;
const largeCellFlex = '1 0 25%';
const smallCellFlex = '1 0 10%';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: ${props => (props.isLarge ? largeCellFlex : smallCellFlex)};
  font-weight: ${props => (props.isHeader ? 700 : 300)};
  padding-top: ${cellPadding}px;
  padding-bottom: ${cellPadding}px;
  border-bottom: ${props => (props.isHeader ? 4 : 2)}px solid #dedede;
`;

const CoinListCell = ({ isLarge, isHeader, children }) => {
  return (
    <Wrapper isLarge={isLarge} isHeader={isHeader}>
      {children}
    </Wrapper>
  );
};

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
