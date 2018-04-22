import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import styleVars from '../../../shared/styles/variables';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: ${styleVars.baseContentPadding};
  padding-right: ${styleVars.baseContentPadding};

  @media (max-width: 800px) {
    padding-left: ${styleVars.smallContentPadding};
    padding-right: ${styleVars.smallContentPadding};
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
