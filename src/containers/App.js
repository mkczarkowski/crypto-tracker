import React, { Component } from "react";

import Header from "../components/Header/Header";
import CoinList from "../components/CoinList/CoinList";

class App extends Component {
  state = {
    cryptos: [
      { name: "Bitcoin", acronym: "BTC", value: 8714, cap: 147379083734 },
      { name: "Etherum", acronym: "ETH", value: 688, cap: 67585640793 },
      { name: "NEO", acronym: "NEO", value: 84, cap: 5515789500 },
      { name: "EOS", acronym: "EOS", value: 5, cap: 4141934598 }
    ],
    marketCap: 376097583984
  };

  render() {
    return (
      <div>
        <Header cap={this.state.marketCap} />
        <CoinList cryptos={this.state.cryptos} />
      </div>
    );
  }
}

export default App;
