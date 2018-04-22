import React from 'react';
import PropTypes from 'prop-types';

import formatAsCurrency from '../../shared/utils/helpers';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 36,
  },
  title: {
    fontWeight: 'bold',
  },
};

const Header = ({ cap }) => (
  <div style={styles.container}>
    <h1 style={styles.title}>Crypto Tracker</h1>
    <p>Market Cap: {formatAsCurrency(cap)}</p>
  </div>
);

Header.propTypes = {
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Header;
