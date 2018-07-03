import { mockedCryptos } from '../../containers/utils/mockedCryptos';

const getCoinList = (limit = 100) => {
  return new Promise(resolve => {
    resolve(mockedCryptos);
  });
};

export default getCoinList;
