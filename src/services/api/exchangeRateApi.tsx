import axios from 'axios';

const API_KEY = 'f5566a0dc6b2e8690761fafc';
const BASE_URL = 'https://v6.exchangerate-api.com/v6/';

export const fetchExchangeRate = async (
  baseCurrency: string,
  targetCurrency: string,
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${API_KEY}/pair/${baseCurrency}/${targetCurrency}`,
    );

    return response.data.conversion_rate;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    throw error;
  }
};
