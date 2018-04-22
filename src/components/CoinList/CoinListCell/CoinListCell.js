import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const CoinListCell = ({ isLarge, isHeader, children }) => {
  const cellPadding = 10;
  const largeCellFlex = '1 0 25%';
  const smallCellFlex = '1 0 10%';

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      flex: isLarge ? largeCellFlex : smallCellFlex,
      fontWeight: isHeader ? 700 : 300,
      paddingTop: cellPadding,
      paddingBottom: cellPadding,
      borderBottom: `${isHeader ? 4 : 2}px solid #dedede`,
    },
  };

  return <div style={[styles.container]}>{children}</div>;
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

export default Radium(CoinListCell);
