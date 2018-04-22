import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import styleVars from '../../../shared/styles/variables';

const CoinListRow = ({ children }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: styleVars.baseMargin,
      marginRight: styleVars.baseMargin,

      '@media (max-width: 800px)': {
        marginLeft: styleVars.smallMargin,
        marginRight: styleVars.smallMargin,
        fontSize: '0.8em',
      },
    },
  };

  return <div style={styles.container}>{children}</div>;
};

CoinListRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Radium(CoinListRow);
