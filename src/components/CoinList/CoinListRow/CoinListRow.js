import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styleVars from '../../../shared/styles/variables';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${styleVars.baseMargin};
  margin-right: ${styleVars.baseMargin};

  @media (max-width: 800px) {
    margin-left: ${styleVars.smallMargin};
    margin-right: ${styleVars.smallMargin};
    font-size: 0.8em;
  }
`;

const CoinListRow = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

CoinListRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoinListRow;
