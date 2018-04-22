import React from 'react';
import PropTypes from 'prop-types';

import styles from './CoinListCell.css';

const CoinListCell = ({ isLarge, isHeader, children }) => {
  const appliedClasses = [];

  if (isLarge) {
    appliedClasses.push(styles['cell--large']);
  } else {
    appliedClasses.push(styles['cell--small']);
  }

  if (isHeader) {
    appliedClasses.push(styles['cell--header']);
  }

  return <div className={appliedClasses.join(' ')}>{children}</div>;
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
