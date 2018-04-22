import React from 'react';
import PropTypes from 'prop-types';

import styleVars from '../../../shared/styles/variables';

const CoinListRow = ({ children }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: styleVars.baseMargin,
      marginRight: styleVars.baseMargin,
    },
  };

  return <div style={styles.container}>{children}</div>;
};

CoinListRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoinListRow;
