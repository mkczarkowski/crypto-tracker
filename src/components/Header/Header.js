import React from "react";
import PropTypes from "prop-types";

const Header = ({ cap }) => (
  <div>
    <h1>Crypto Tracker</h1>
    <p>
      Market Cap: ${String(cap)
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        .trim()}
    </p>
  </div>
);

Header.propTypes = {
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Header;
