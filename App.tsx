import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { CurrencyProvider } from './src/store/CurrencyContext';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <CurrencyProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <HomeScreen />
      </SafeAreaView>
    </CurrencyProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

export default App;