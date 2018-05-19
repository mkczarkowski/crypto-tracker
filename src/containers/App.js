import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';

import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import CoinList from '../components/CoinList/CoinList';
import { mapFetchedCryptos } from "../shared/utils/helpers";

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
          cryptos: mapFetchedCryptos(fetchedCryptos)
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
