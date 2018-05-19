import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';

import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import CoinList from '../components/CoinList/CoinList';

const coinMarketCapAxiosInstance = axios.create({
  baseURL: 'https://api.coinmarketcap.com/v2/',
});

class App extends Component {
  state = {
    cryptos: [],
    matchedCryptos: null,
    marketCap: 376097583984,
    searchQuery: '',
  };

  getIconPath(id) {
    return `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;
  }

  setMatchedCryptos = debounce(() => {
    const cryptos = [...this.state.cryptos];

    function isMatched(phrase) {
      const regex = new RegExp(`\\b${phrase}.*\\b`, 'i');
      return function(crypto) {
        return Object.values(crypto).some(val => regex.test(val));
      };
    }

    const isMatchedWithSearchQuery = isMatched(this.state.searchQuery);
    const matchedCryptos = cryptos.filter(isMatchedWithSearchQuery);
    this.setState({ matchedCryptos });
  }, 250);

  searchChangedHandler = event => {
    this.setState({ searchQuery: event.target.value }, this.setMatchedCryptos);
  };

  componentDidMount() {
    coinMarketCapAxiosInstance
      .get('ticker/?limit=100')
      .then(({ data: { data: fetchedCryptos } }) => {
        this.setState({
          cryptos: Object.keys(fetchedCryptos).map(cryptoId => {
            const crypto = fetchedCryptos[cryptoId];

            const {
              name,
              symbol: acronym,
              id,
              circulating_supply: supply,
            } = crypto;
            const symbolPath = this.getIconPath(id);
            const quotesInUsd = crypto.quotes.USD;
            const {
              price,
              market_cap: cap,
              percent_change_1h: change,
            } = quotesInUsd;

            return { name, acronym, supply, symbolPath, price, change, cap };
          }),
        });
      });
  }

  render() {
    return (
      <div>
        <Header cap={this.state.marketCap} />
        <SearchBar
          handleChange={this.searchChangedHandler}
          searchQuery={this.state.searchQuery}
        />
        <CoinList
          cryptos={
            this.state.matchedCryptos !== null
              ? this.state.matchedCryptos
              : this.state.cryptos
          }
        />
      </div>
    );
  }
}

export default App;
