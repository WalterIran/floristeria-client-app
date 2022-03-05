import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderDetail = ({product, cant, price}) => {
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.text}>{product}</Text>
          <Text style={styles.text}>Cant: {cant}</Text>
      </View>
      <Text style={styles.text}>$ {parseFloat(price)}</Text>
    </View>
  )
}

export default OrderDetail;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    text: {
      fontSize: 18,
    },
    
})