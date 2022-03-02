import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Orders = () => {
  const navigation = useNavigation();

  const goToOrderDetail = () => {
    navigation.navigate('OrderDetail');
  }

  return (
    <View>
      <Text>Orders</Text>
      <Pressable onPress={goToOrderDetail} style={styles.btn}>
        <Text style={styles.btnText}>Ir a detalle del pedido</Text>
      </Pressable>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#BFA658',
    fontSize: 24,
    height: 60,
    width: '80%',
    justifyContent: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  btnText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 24,
  }
});