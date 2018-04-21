import React from 'react';
import PropTypes from 'prop-types';

import styles from './CoinListCell.css';

const CoinListCell = ({ isLarge, isHeader, additionalStyling, children }) => {
  const appliedClasses = [styles.cell, ...additionalStyling];
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
  additionalStyling: PropTypes.string,
  // additionalStyling: PropTypes.objectOf(PropTypes.string, PropTypes.number),
  children: PropTypes.node.isRequired,
};

CoinListCell.defaultProps = {
  isLarge: false,
  isHeader: false,
  additionalStyling: {},
};

export default CoinListCell;
