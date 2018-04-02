import React, { Component } from "react";
import debounce from "lodash.debounce";

import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import CoinList from "../components/CoinList/CoinList";

class App extends Component {
  state = {
    cryptos: [
      { name: "Bitcoin", acronym: "BTC", value: 8714, cap: 147379083734 },
      { name: "Etherum", acronym: "ETH", value: 688, cap: 67585640793 },
      { name: "NEO", acronym: "NEO", value: 84, cap: 5515789500 },
      { name: "EOS", acronym: "EOS", value: 5, cap: 4141934598 }
    ],
    matchedCryptos: [],
    marketCap: 376097583984,
    searchQuery: ""
  };

  componentWillMount() {
    this.setMatchedCryptos();
  }

  searchChangedHandler = event => {
    this.setState({ searchQuery: event.target.value }, this.setMatchedCryptos);
  };

  setMatchedCryptos = debounce(() => {
    const cryptos = [...this.state.cryptos];

    function isMatched(phrase) {
      const regex = new RegExp(`\\b${phrase}.*\\b`, "i");
      return function(crypto) {
        return Object.values(crypto).some(val => regex.test(val));
      };
    }

    const isMatchedWithSearchQuery = isMatched(this.state.searchQuery);
    const matchedCryptos = cryptos.filter(isMatchedWithSearchQuery);
    this.setState({ matchedCryptos });
  }, 250);

  render() {
    return (
      <div>
        <Header cap={this.state.marketCap} />
        <SearchBar handleChange={this.searchChangedHandler} searchQuery={this.state.searchQuery} />
        <CoinList cryptos={this.state.matchedCryptos} />
      </div>
    );
  }
}

export default App;
