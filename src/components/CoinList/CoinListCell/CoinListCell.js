import React from 'react';
import PropTypes from 'prop-types';

import styleVars from '../../../shared/styles/variables';

const CoinListCell = ({ isLarge, isHeader, children }) => {
  const cellPadding = 10;

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      flex: isLarge ? styleVars.baseMargin : styleVars.baseMargin,
      fontWeight: isHeader ? 700 : 300,
      paddingTop: cellPadding,
      paddingBottom: cellPadding,
      borderBottom: `${isHeader ? 4 : 2}px solid #dedede`,
    },
  };

  return <div style={styles.container}>{children}</div>;
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
