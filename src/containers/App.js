import React, { Component } from "react";

import Coin from "../components/CoinList/Coin/Coin";
import Header from "../components/Header/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Coin />
      </div>
    );
  }
}

export default App;
