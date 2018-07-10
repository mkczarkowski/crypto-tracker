import { mockedCryptos } from '../../containers/tests/utils/mockedCryptos';

const getCoinList = (limit = 100) => {
  return new Promise(resolve => {
    resolve(mockedCryptos);
  });
};

export default getCoinList;
