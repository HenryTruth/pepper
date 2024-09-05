// src/utils/exchangeRateCache.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_KEY = 'EXCHANGE_RATE_CACHE';
const CACHE_EXPIRY = 60 * 60 * 1000; // 1 hour in milliseconds

interface CachedRate {
  rate: number;
  timestamp: number;
}

export const getCachedRate = async (baseCurrency: string, targetCurrency: string): Promise<number | null> => {
  try {
    const cacheString = await AsyncStorage.getItem(CACHE_KEY);
    if (cacheString) {
      const cache = JSON.parse(cacheString);
      const key = `${baseCurrency}_${targetCurrency}`;
      const cachedRate = cache[key] as CachedRate | undefined;
      if (cachedRate && Date.now() - cachedRate.timestamp < CACHE_EXPIRY) {
        return cachedRate.rate;
      }
    }
  } catch (error) {
    console.error('Error reading from cache:', error);
  }
  return null;
};

export const setCachedRate = async (baseCurrency: string, targetCurrency: string, rate: number) => {
  try {
    const cacheString = await AsyncStorage.getItem(CACHE_KEY);
    const cache = cacheString ? JSON.parse(cacheString) : {};
    const key = `${baseCurrency}_${targetCurrency}`;
    cache[key] = { rate, timestamp: Date.now() };
    await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.error('Error writing to cache:', error);
  }
};