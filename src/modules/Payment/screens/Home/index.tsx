import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { getPaymentAsync } from '../../services/paymentBase';
import { styles } from './styles';


export const Home = () => {

  useEffect(() => {
    const onLoad = async () => {
      const response = await getPaymentAsync({ id: 1 })
      console.log(response)
    }

    onLoad();
  }, [])

  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  );
}
