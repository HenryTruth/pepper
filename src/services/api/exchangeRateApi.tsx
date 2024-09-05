import axios from 'axios';
import { getCachedRate, setCachedRate } from '../../utils/exchangerateCache';
import { checkNetworkConnectivity } from '../../utils/networkutilities';

const API_KEY = 'f5566a0dc6b2e8690761fafc';
const BASE_URL = 'https://v6.exchangerate-api.com/v6/';

export const fetchExchangeRate = async (
  baseCurrency: string,
  targetCurrency: string,
) => {
  try {
    const cachedRate = await getCachedRate(baseCurrency, targetCurrency);
    if (cachedRate !== null) {
      return cachedRate;
    }

    // Check network connectivity
    const isConnected = await checkNetworkConnectivity();
    if (!isConnected) {
      throw new Error('No internet connection');
    }

    const response = await axios.get(
      `${BASE_URL}/${API_KEY}/pair/${baseCurrency}/${targetCurrency}`,
    );

    const rate = response.data.conversion_rate;
// Cache the new rate
    await setCachedRate(baseCurrency, targetCurrency, rate);

    return rate;

  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    throw error;
  }
};
