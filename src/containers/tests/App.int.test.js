import React from 'react';

import debounce from 'lodash.debounce';
import getCoinList from '../../api/coinMarketCap';

import App from '../App';
import { NO_RESULTS_MESSAGE } from '../../components/CoinList/CoinList';
import { mockedCryptos } from './utils/mockedCryptos';

jest.mock('lodash.debounce', () => jest.fn(fn => fn));
jest.mock('../../api/coinMarketCap');

describe('<App />', () => {
  let appWrapper;
  let searchBarInput;
  const mockedCryptosCount = Object.keys(mockedCryptos.data.data).length;

  const mountApp = (disableLifecycleMethods = false) =>
    mount(<App />, { disableLifecycleMethods });

  const getCoinListWrapper = () => {
    if (!appWrapper) {
      appWrapper = mountApp();
    }

    return appWrapper.find('CoinList');
  };

  beforeEach(() => {
    appWrapper = mountApp();
    searchBarInput = appWrapper.find('#search-bar-input').at(0);
  });

  afterEach(() => {
    appWrapper = undefined;
    searchBarInput = undefined;
  });

  it('only displays loading animation until cryptos will have fetched', () => {
    appWrapper = mountApp(true);
    expect(getCoinListWrapper().find('Spinner').length).toBe(1);
    expect(getCoinListWrapper().find('Coin').length).toBe(0);
  });

  it('hides loading animation after cryptos had fetched', () => {
    appWrapper.update();
    expect(
      getCoinListWrapper()
        .find('Spinner')
        .exists(),
    ).toBe(false);
  });

  it('displays all fetched cryptos', () => {
    appWrapper.update();
    expect(getCoinListWrapper().find('Coin').length).toBe(mockedCryptosCount);
  });

  it(`displays single match`, () => {
    searchBarInput.simulate('change', { target: { value: 'BTC' } });
    expect(getCoinListWrapper().find('Coin').length).toBe(1);
  });

  it('displays multiple matches', () => {
    searchBarInput.simulate('change', { target: { value: 'B' } });
    expect(getCoinListWrapper().find('Coin').length).toBe(2);
  });

  it('displays message if there is no match', () => {
    searchBarInput.simulate('change', {
      target: { value: 'NIE-TYM-RAZEM-COIN' },
    });
    expect(
      getCoinListWrapper()
        .find('.coin-list__content')
        .text(),
    ).toBe(NO_RESULTS_MESSAGE);
  });

  it('displays all available cryptos after user deletes search query', () => {
    searchBarInput.simulate('change', { target: { value: 'B' } });
    searchBarInput.simulate('change', { target: { value: '' } });
    expect(getCoinListWrapper().find('Coin').length).toBe(mockedCryptosCount);
  });
});
