import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


interface CurrencyPickerProps {
    selectedCurrency: string;
    onCurrencyChange: (currency: string) => void;
    currencies: string[];
  }

const CurrencyPicker = ({selectedCurrency,
    onCurrencyChange,
    currencies}:CurrencyPickerProps) => {
    return(
        <View style={styles.container}>
      <Picker
        selectedValue={selectedCurrency}
        onValueChange={(itemValue) => onCurrencyChange(itemValue)}
        style={styles.picker}
      >
        {currencies.map((currency) => (
          <Picker.Item key={currency} label={currency} value={currency} />
        ))}
      </Picker>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginVertical: 10,
      // backgroundColor:'red'
    },
    picker: {
      // height: 100,
      // width: '100%',
    },
  });

  export default CurrencyPicker;