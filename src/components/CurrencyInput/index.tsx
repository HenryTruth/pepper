import {StyleSheet, TextInput, View} from 'react-native';

interface CurrencyInputProps {
  value: string;
  onChangeText: (text: string) => void;
  currency: string;
}

const CurrencyInput = ({value, onChangeText, currency}: CurrencyInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        placeholder={`Enter amount in ${currency}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

export default CurrencyInput;
