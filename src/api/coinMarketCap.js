import axios from 'axios/index';

const coinMarketCapAxiosInstance = axios.create({
  baseURL: 'https://api.coinmarketcap.com/v2/',
});

const getCoinList = (limit = 100) =>
  coinMarketCapAxiosInstance.get(`ticker/?limit=${limit}`);

export default getCoinList;
