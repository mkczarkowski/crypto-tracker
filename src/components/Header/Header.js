import React from 'react';
import PropTypes from 'prop-types';

import formatAsCurrency from '../../shared/utils/helpers';

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 36,
};

const title = {
  fontWeight: 'bold',
};

const Header = ({ cap }) => (
  <div style={container}>
    <h1 style={title}>Crypto Tracker</h1>
    <p>Market Cap: {formatAsCurrency(cap)}</p>
  </div>
);

Header.propTypes = {
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Header;
