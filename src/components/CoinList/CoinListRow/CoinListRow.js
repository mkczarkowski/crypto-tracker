import React from 'react';
import PropTypes from 'prop-types';

import styles from './CoinListRow.css';

const CoinListRow = ({ children }) => (
  <div className={styles.row}>{children}</div>
);

CoinListRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CoinListRow;
