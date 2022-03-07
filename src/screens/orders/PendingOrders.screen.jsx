import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Order from '../../components/Order.component';

const Orders = () => {
  const navigation = useNavigation();

  const goToOrderDetail = () => {
    navigation.navigate('OrderDetail');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Order orderId={1} goTo={goToOrderDetail}/>
      <Order orderId={2} goTo={goToOrderDetail}/>
      <Order orderId={3} goTo={goToOrderDetail}/>
      <Order orderId={4} goTo={goToOrderDetail}/>
    </ScrollView>
  )
}

export default Orders;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
});