import React from "react";
import PropTypes from "prop-types";

const headerContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 36
};

const appTitle = {
  fontWeight: "bold"
};

const formatMoneyRegex = /\B(?=(\d{3})+(?!\d))/g;

const Header = ({ cap }) => (
  <div style={headerContainer}>
    <h1 style={appTitle}>Crypto Tracker</h1>
    <p>
      Market Cap: ${String(cap)
        .replace(formatMoneyRegex, " ")
        .trim()}
    </p>
  </div>
);

Header.propTypes = {
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default Header;
