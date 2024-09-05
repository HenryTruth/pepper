import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import CurrencyPicker from '../../components/CurrencyPicker';
import CurrencyInput from '../../components/CurrencyInput';
import ErrorMessage from '../../components/ErrorMessage';
import { useCurrency } from '../../hooks/useCurrency';
import { storeData, getData } from '../../utils/storage';
import { checkNetworkConnectivity } from '../../utils/networkutilities';
import { fetchExchangeRate } from '../../services/api/exchangeRateApi';

const CURRENCIES = ['USD', 'EUR', 'GBP', 'CAD', 'NGN', 'JPY', 'AUD', 'CNY', 'INR', 'ZAR'];

const HomeScreen: React.FC = () => {
   
  const [isLoading, setIsLoading] = useState(false);
  const {
    sourceCurrency,
    targetCurrency,
    amount,
    convertedAmount,
    error,
    setError,
    setSourceCurrency,
    setTargetCurrency,
    setAmount,
    setConvertedAmount,
  } = useCurrency();

  useEffect(() => {
    loadStoredPreferences();
  }, []);

  useEffect(() => {
    if (amount && sourceCurrency && targetCurrency) {
      convertCurrency();
    }
  }, [amount, sourceCurrency, targetCurrency]);


  const loadStoredPreferences = async () => {
    const storedSourceCurrency = await getData('sourceCurrency');
    const storedTargetCurrency = await getData('targetCurrency');

    if (storedSourceCurrency) setSourceCurrency(storedSourceCurrency);
    if (storedTargetCurrency) setTargetCurrency(storedTargetCurrency);
  };

  const convertCurrency = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const isConnected = await checkNetworkConnectivity();
      if (!isConnected) {
        Alert.alert('No Internet Connection', 'Please check your network settings.');
        return;
      }

      const rate = await fetchExchangeRate(sourceCurrency, targetCurrency);
      const result = (parseFloat(amount) * rate).toFixed(2);
      setConvertedAmount(result);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };


  const handleSourceCurrencyChange = (currency: string) => {
    setSourceCurrency(currency);
    storeData('sourceCurrency', currency);
  };

  const handleTargetCurrencyChange = (currency: string) => {
    setTargetCurrency(currency);
    storeData('targetCurrency', currency);
  };

  return (
    <View style={styles.container}>
      <CurrencyPicker
        selectedCurrency={sourceCurrency}
        onCurrencyChange={handleSourceCurrencyChange}
        currencies={CURRENCIES}
      />
      <CurrencyInput
        value={amount}
        onChangeText={setAmount}
        currency={sourceCurrency}
      />
      <CurrencyPicker
        selectedCurrency={targetCurrency}
        onCurrencyChange={handleTargetCurrencyChange}
        currencies={CURRENCIES}
      />
      <CurrencyInput
        value={convertedAmount}
        onChangeText={() => {}}
        currency={targetCurrency}
        // editable={false}
      />
      {error && <ErrorMessage message={error} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default HomeScreen;