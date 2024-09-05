import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import CurrencyPicker from '../../components/CurrencyPicker';
import CurrencyInput from '../../components/CurrencyInput';
import ErrorMessage from '../../components/ErrorMessage';
import { useCurrency } from '../../hooks/useCurrency';
import { storeData, getData } from '../../utils/storage';

const CURRENCIES = ['USD', 'EUR', 'GBP', 'CAD', 'NGN', 'JPY', 'AUD', 'CNY', 'INR', 'ZAR'];

const HomeScreen: React.FC = () => {
  const {
    sourceCurrency,
    targetCurrency,
    amount,
    convertedAmount,
    error,
    setSourceCurrency,
    setTargetCurrency,
    setAmount,
  } = useCurrency();

  useEffect(() => {
    loadStoredPreferences();
  }, []);

  const loadStoredPreferences = async () => {
    const storedSourceCurrency = await getData('sourceCurrency');
    const storedTargetCurrency = await getData('targetCurrency');

    if (storedSourceCurrency) setSourceCurrency(storedSourceCurrency);
    if (storedTargetCurrency) setTargetCurrency(storedTargetCurrency);
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