import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';
import formatAsCurrency from '../../shared/utils/helpers';

const Header = ({ cap }) => (
  <div className={styles.header}>
    <h1 className={styles['header__title']}>Crypto Tracker</h1>
    <p>Market Cap: {formatAsCurrency(cap)}</p>
  </div>
);

Header.propTypes = {
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Header;
