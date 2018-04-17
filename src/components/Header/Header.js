import React from 'react';
import PropTypes from 'prop-types';

import formatAsCurrency from '../../utils/helpers';

const headerContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 36,
};

const appTitle = {
  fontWeight: 'bold',
};

const Header = ({ cap }) => (
  <div style={headerContainer}>
    <h1 style={appTitle}>Crypto Tracker</h1>
    <p>Market Cap: {formatAsCurrency(cap)}</p>
  </div>
);

Header.propTypes = {
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Header;
