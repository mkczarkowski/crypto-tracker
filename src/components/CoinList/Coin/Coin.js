import React from "react";

const Coin = props => {
  props = {};

  return (
    <div>
      <p>Bitcoin</p>
      <ul>
        <li className="currency-acronym">Acronym: BTC</li>
        <li className="currency-value">Current value: 8.800 $</li>
        <li className="currency-cap">Market cap: 2,3 mld</li>
      </ul>
    </div>
  );
};

export default Coin;
