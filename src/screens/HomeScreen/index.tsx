import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';



const CURRENCIES = ['USD', 'EUR', 'GBP', 'CAD', 'NGN', 'JPY', 'AUD', 'CNY', 'INR', 'ZAR'];


const HomeScreen = () => {

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // loadStoredPreferences();
      }, []);


    return(
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
  });
  

export default HomeScreen;


