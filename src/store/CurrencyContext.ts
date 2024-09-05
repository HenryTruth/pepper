import React, { useState, ReactNode, useEffect, useCallback } from 'react';
import { fetchExchangeRate } from '../services/api/exchangeRateApi';
import { CurrencyContext, CurrencyContextType } from '../hooks/useCurrency';




interface CurrencyProviderProps {
  children: ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [sourceCurrency, setSourceCurrency] = useState<string>('USD');
  const [targetCurrency, setTargetCurrency] = useState<string>('EUR');
  const [amount, setAmount] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<string>('');
  const [error, setError] = useState<string>('');


  

  const convertAmount = useCallback(async () => {
    if (!amount || isNaN(parseFloat(amount))) {
      setError('Invalid amount');
      setConvertedAmount('');
      return;
    }

    try {
      const conversionRate = await fetchExchangeRate(sourceCurrency, targetCurrency);
      const converted = parseFloat(amount) * conversionRate;
      setConvertedAmount(converted.toFixed(2));
      setError('');
    } catch (error) {
      setError('Error fetching conversion rate');
      setConvertedAmount('');
    }
  }, [amount, sourceCurrency, targetCurrency]);

  useEffect(() => {
    if (amount && sourceCurrency && targetCurrency) {
      const debounceTimer = setTimeout(() => {
        convertAmount();
      }, 500);

      return () => clearTimeout(debounceTimer);
    }
  }, [amount, sourceCurrency, targetCurrency, convertAmount]);

  const contextValue: CurrencyContextType = {
    sourceCurrency,
    targetCurrency,
    amount,
    convertedAmount,
    error,
    setSourceCurrency,
    setTargetCurrency,
    setAmount,
  };

  return React.createElement(
    CurrencyContext.Provider,
    { value: contextValue },
    children
  );
};