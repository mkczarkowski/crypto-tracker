import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import getCoinList from '../api/coinMarketCap';

import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import CoinList from '../components/CoinList/CoinList';
import { mapFetchedCryptos } from '../shared/utils/helpers';

class App extends Component {
  state = {
    cryptos: [],
    matchedCryptos: null,
    marketCap: 376097583984,
    searchQuery: '',
    isLoading: true,
  };

  componentDidMount() {
    getCoinList().then(({ data: { data: fetchedCryptos } }) => {
      this.setState({
        cryptos: mapFetchedCryptos(fetchedCryptos),
        isLoading: false,
      });
    });
  }

  onSearchQueryChanged = event => {
    this.setState({ searchQuery: event.target.value }, this.setMatchedCryptos);
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

  render() {
    return (
      <div>
        <Header cap={this.state.marketCap} />
        <SearchBar
          handleChange={this.onSearchQueryChanged}
          searchQuery={this.state.searchQuery}
        />
        <CoinList
          cryptos={
            this.state.matchedCryptos !== null
              ? this.state.matchedCryptos
              : this.state.cryptos
          }
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
