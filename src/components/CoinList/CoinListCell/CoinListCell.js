import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const fieldPadding = 10;
const largeFieldFlex = '1 0 25%';
const smallFieldFlex = '1 0 10%';

const Container = styled.div`
            display: flex;
            align-items: center;
            flex: ${props => (props.isLarge ? largeFieldFlex : smallFieldFlex)};
            font-weight: ${props => (props.isHeader ? 700 : 300)};
            padding-top: ${fieldPadding}px;
            padding-bottom: ${fieldPadding}px;
            border-bottom: ${props => (props.isHeader ? 4 : 2)}px solid #dedede;
`;

const CoinListCell = ({ isLarge, isHeader, children }) => {
  return (
    <Container isLarge={isLarge} isHeader={isHeader}>
      {children}
    </Container>
  );
};

CoinListCell.propTypes = {
  isLarge: PropTypes.bool,
  hasBoldText: PropTypes.bool,
  hasThinBorder: PropTypes.bool,
  additionalStyling: PropTypes.object,
  children: PropTypes.node.isRequired,
};

CoinListCell.defaultProps = {
  isLarge: false,
  hasBoldText: false,
  hasThinBorder: false,
  additionalStyling: {},
};

export default CoinListCell;
