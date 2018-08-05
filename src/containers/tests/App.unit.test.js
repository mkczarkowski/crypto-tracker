import React from 'react';

import App from '../App';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import CoinList from '../../components/CoinList/CoinList';
import debounce from 'lodash.debounce';
import getCoinList from '../../api/coinMarketCap';
import { mockedCryptos, mappedMockedCryptos } from './utils/mockedCryptos';
const mockedCryptosCount = Object.keys(mockedCryptos.data.data).length;

jest.mock('lodash.debounce', () => jest.fn(fn => fn));
jest.mock('../../api/coinMarketCap');

describe('<App />', () => {
  let appWrapper;
  let appInstance;
  const app = (disableLifecycleMethods = false) =>
    shallow(<App />, { disableLifecycleMethods });

  beforeEach(() => {
    appWrapper = app();
    appInstance = appWrapper.instance();
  });

  afterEach(() => {
    appWrapper = undefined;
    appInstance = undefined;
  });

  it('renders without crashing', () => {
    expect(app().exists()).toBe(true);
  });

  it('renders a div', () => {
    expect(appWrapper.first().type()).toBe('div');
  });

  describe('the rendered div', () => {
    const div = () => appWrapper.first();

    it('contains everything else that gets rendered', () => {
      expect(div().children()).toEqual(appWrapper.children());
    });
  });

  it('renders <Header />', () => {
    expect(appWrapper.find(Header).length).toBe(1);
  });

  describe('the rendered <Header />', () => {
    const header = () => appWrapper.find(Header);

    it('receives state.marketCap as a "cap" prop', () => {
      expect(header().prop('cap')).toEqual(appWrapper.state('marketCap'));
    });
  });

  it('renders <SearchBar />', () => {
    expect(appWrapper.find(SearchBar).length).toBe(1);
  });

  describe('the rendered <SearchBar />', () => {
    const searchBar = () => appWrapper.find(SearchBar);

    it('receives onSearchQueryChanged as "handleChange" prop', () => {
      expect(searchBar().prop('handleChange')).toEqual(
        appInstance.onSearchQueryChanged,
      );
    });

    it('receives state.searchQuery as "searchQuery" prop', () => {
      expect(searchBar().prop('searchQuery')).toEqual(
        appWrapper.state('searchQuery'),
      );
    });
  });

  it('renders <CoinList />', () => {
    expect(appWrapper.find(CoinList).length).toBe(1);
  });

  describe('the rendered <CoinList />', () => {
    const coinList = () => appWrapper.find(CoinList);
    beforeEach(() => {
      appWrapper = app(true);
      appInstance = appWrapper.instance();
    });

    it('receives state.isLoading as a "isLoading" prop', () => {
      expect(coinList().prop('isLoading')).toBe(appInstance.state.isLoading);
    });

    describe('when "matchedCryptos" is null', () => {
      beforeEach(() => {
        appInstance.setState({ matchedCryptos: null });
      });

      it('receives state.cryptos as "cryptos" prop', () => {
        expect(coinList().prop('cryptos')).toEqual(appInstance.state.cryptos);
      });
    });

    describe('when "matchedCryptos" is not null', () => {
      beforeEach(() => {
        appInstance.setState({ matchedCryptos: [] });
      });

      it('receives state.matchedCryptos as "cryptos" prop', () => {
        expect(coinList().prop('cryptos')).toEqual(
          appInstance.state.matchedCryptos,
        );
      });
    });
  });

  describe('the onSearchQueryChanged method', () => {
    const event = { target: { value: 'BTC' } };
    let setMatchedCryptosSpy;
    beforeEach(() => {
      setMatchedCryptosSpy = jest.spyOn(appInstance, 'setMatchedCryptos');
      appInstance.onSearchQueryChanged(event);
    });

    afterEach(() => {
      setMatchedCryptosSpy.mockClear();
    });

    it('sets searchQuery to event.target.value', () => {
      expect(appInstance.state.searchQuery).toEqual(event.target.value);
    });

    it('calls "setMatchedCryptos" callback', () => {
      expect(setMatchedCryptosSpy).toHaveBeenCalledTimes(1);
    });

    describe('the called "setMatchedCryptos" callback', () => {
      beforeEach(() => {
        appInstance.setState({ cryptos: mappedMockedCryptos });
      });

      describe('when searchQuery is matching with cryptos', () => {
        it('sets matchedCryptos to array of matched elements', () => {
          expect(appInstance.state.matchedCryptos).toEqual([
            appInstance.state.cryptos[0],
          ]);
        });
      });

      describe('when searchQuery is not matching with cryptos', () => {
        beforeEach(() => {
          const eventWithoutMatch = { target: { value: 'noMatchCoin ' } };
          appInstance.onSearchQueryChanged(eventWithoutMatch);
        });

        it('sets matchedCryptos to empty array', () => {
          expect(appInstance.state.matchedCryptos).toEqual([]);
        });
      });
    });
  });

  describe('the componentDidMount method', () => {
    it('fetches cryptos from external api', done => {
      setTimeout(() => {
        appWrapper.update();
        const state = appInstance.state;
        expect(state.cryptos.length).toBe(mockedCryptosCount);
        expect(state.isLoading).toBe(false);

        done();
      });
    });
  });
});
