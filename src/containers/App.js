import React, { Component } from "react";

import Coin from "../components/CoinList/Coin/Coin";
import Header from "../components/Header/Header";

class App extends Component {
  state = {
    cryptos: [
      { name: "Bitcoin", acronym: "BTC", value: 8714, cap: 147379083734 },
      { name: "Etherum", acronym: "ETH", value: 688, cap: 67585640793 },
      { name: "NEO", acronym: "ETH", value: 84, cap: 5515789500 },
      { name: "EOS", acronym: "EOS", value: 5, cap: 4141934598 }
    ],
    marketCap: 376097583984
  };

  render() {
    return (
      <div>
        <Header cap={this.state.marketCap} />
        <Coin
          name={this.state.cryptos[0].name}
          acronym={this.state.cryptos[0].acronym}
          value={this.state.cryptos[0].value}
          cap={this.state.cryptos[0].cap}
        />
        <Coin
          name={this.state.cryptos[1].name}
          acronym={this.state.cryptos[1].acronym}
          value={this.state.cryptos[1].value}
          cap={this.state.cryptos[1].cap}
        />
        <Coin
          name={this.state.cryptos[2].name}
          acronym={this.state.cryptos[2].acronym}
          value={this.state.cryptos[2].value}
          cap={this.state.cryptos[2].cap}
        />
        <Coin
          name={this.state.cryptos[3].name}
          acronym={this.state.cryptos[3].acronym}
          value={this.state.cryptos[3].value}
          cap={this.state.cryptos[3].cap}
        />
      </div>
    );
  }
}

export default App;
