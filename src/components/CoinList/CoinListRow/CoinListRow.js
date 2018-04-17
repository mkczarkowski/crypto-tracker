import React from 'react';
import PropTypes from 'prop-types';

const CoinListRow = ({ children }) => {
  const containerPadding = '15%';
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: containerPadding,
      paddingRight: containerPadding,
    },
  };

  return <div style={styles.container}>{children}</div>;
};

CoinListRow.propTypes = {
  additionalStyling: PropTypes.object,
  children: PropTypes.node.isRequired,
};

CoinListRow.defaultProps = {
  additionalStyling: {},
};

export default CoinListRow;
