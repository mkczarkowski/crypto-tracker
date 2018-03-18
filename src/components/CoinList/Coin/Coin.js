import React from "react";
import PropTypes from "prop-types";

const Coin = ({ name, acronym, value, cap }) => (
  <div>
    <p>{name}</p>
    <ul>
      <li className="currency-acronym">Acronym: {acronym}</li>
      <li className="currency-value">
        Current value: ${String(value)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          .trim()}
      </li>
      <li className="currency-cap">
        Market cap: ${String(cap)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          .trim()}
      </li>
    </ul>
  </div>
);

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  acronym: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Coin.defaultProps = {
  acronym: "-",
  value: "0",
  cap: "0"
};

export default Coin;
