import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import CurrencyPicker from "../../components/CurrencyPicker";


const CURRENCIES = ['USD', 'EUR', 'GBP', 'CAD', 'NGN', 'JPY', 'AUD', 'CNY', 'INR', 'ZAR'];


const HomeScreen: React.FC = () => {
    
  
  
   
  
    return (
      <View style={styles.container}>
        
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
