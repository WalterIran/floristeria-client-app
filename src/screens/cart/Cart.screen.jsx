import { StyleSheet, Text, View ,Image,Pressable, ScrollView, Button, ActivityIndicator} from 'react-native'
import React from 'react';
import {useState, useEffect} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { formatter } from '../../utils/formatter';

const Cart = () => {
  const { auth } = useAuth();
  const [data, setData] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const goToDelivery = () => {
      navigation.navigate('Delivery');
  }
  
  const getProducts = async () => {
    setLoading(true);
    const response = await axios.get(`/shopping-cart/find-user-cart/${auth.user.id}`);
    axios.get(`/shopping-cart/${auth.user.id}/find-user-cart-details`)
     .then(function (response){
        setData(response.data);
     })
     .catch(function (error){
       console.error(error);
     });
     setLoading(false);
  }
  
   const incrementQuantity = async (id) =>{
    try {
      const response = await axios.put(`/shopping-cart/${data[0].cartId}/product/${id}/add`)
      const detail = data;
      const prodIndex = detail.findIndex(prod => {
        return prod.productId === id
      });
      detail[prodIndex] = {...detail[prodIndex], quantity: detail[prodIndex].quantity + 1};
      setData([...detail]);
    } catch (error) {
      alert(error);
    }
  }

  const decrementQuantity = async (id) =>{
    try {
      const response = await axios.put(`/shopping-cart/${data[0].cartId}/product/${id}/subtract`);
      if(response.data.count === 1) {
        const detail = data;
        const prodIndex = detail.findIndex(prod => {
          return prod.productId === id
        });
        detail[prodIndex] = {...detail[prodIndex], quantity: detail[prodIndex].quantity - 1};
        setData([...detail]);
      }else {
        throw new Error('Mínimo un producto o eliminalo de tu carrito');
      }
    } catch (error) {
      alert(error);
    }
    
  }

  const cancelledProduct = async (id) => {
    try {
      const response = await axios.delete(`/shopping-cart/${data[0].cartId}/product/${id}/cancel`);
      if(response.data.deleteCount === 1){
        const detail = data.filter( (value) => {
          return value.productId !== id
        });
        setData([...detail]);
      }
    } catch (error) {
      alert(error);
    }
    
  }
  useEffect(() => {
    getProducts();
    const unsub = navigation.addListener('focus', getProducts);
    return unsub;
  }, [navigation]);


  
  return (
    <ScrollView>
      <Button title='Refrescar' onPress={getProducts} />
      {
        data !== null && !loading ? (
          <SafeAreaView style={styles.mainContainer}>
            {data.length === 0 && <Text>Carrito Vacío</Text>}
            {
              data.map((product,index)=>{
                  return (
                    <View key={product.productId} style={styles.productContainer}>
                      <View style={styles.productImageContainer}>
                        <Image 
                          source={{uri:product.product.productImgUrl}}
                          style={styles.img}
                        />
                      </View>
                      <View style={styles.productInformationContainer}>
                        <Text style={styles.title}>{product.product.productName}</Text>
                        <Text style={styles.textPrice}>{formatter.format(product.price)}</Text>
                        <View style={styles.information}>
                          <Pressable onPress={()=>decrementQuantity(product.productId)}>
                            <EvilIcons name="arrow-left" style={styles.button}></EvilIcons>
                          </Pressable>
                          <Text style={styles.textQuantity}>{product.quantity}</Text>
                          <Pressable onPress={()=>incrementQuantity(product.productId)}>
                            <EvilIcons name="arrow-right" style={styles.button}></EvilIcons>
                          </Pressable>
                          <Pressable  onPress={()=>cancelledProduct(product.productId)}>
                            <EvilIcons name="trash" style={styles.trashButton}></EvilIcons>
                          </Pressable>
                        </View>
                      </View>
                    </View>  
                  );
              })
            } 
            <Pressable style={styles.continueBottun} onPress={goToDelivery}>
              <Text style={styles.continueBottunText}>Continuar</Text>
            </Pressable>
          </SafeAreaView>
        ) : (
          <ActivityIndicator />
        )
      }
    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
  mainContainer:{
    flexDirection: 'column',
    padding: 20,
    paddingTop: 0,
    marginTop: 0,
    flex: 1,  
  },
  productContainer:{
    flexDirection: 'row',
    padding: 10,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BFA658',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  productImageContainer:{
    flex: 1,
  },
  productInformationContainer:{
    flex: 1,
    flexDirection:'column',
    padding:20,
  },
  information:{
    flexDirection: 'row',
  },
  img:{
    height: 160,
    width: 160,
    borderRadius: 30,
    resizeMode: 'contain',
  },
  title:{
    fontSize: 24,
    color: '#BFA658'
  },
  textPrice:{
    fontSize: 20,
    margin: 5,
    paddingTop: 5
  },
  textQuantity:{
    fontSize: 20,
    margin: 5,
    paddingTop: 5,
    paddingRight: 5
  },
  button:{
    color: '#BFA658',
    fontSize: 40,
    padding: 5,
    paddingLeft: 0
  },
  trashButton:{
    color: '#BFA658',
    fontSize: 55,
    marginTop: -1,
    paddingRight: 20
  },
  continueBottun:{
    backgroundColor: '#BFA658',
    fontSize: 24,
    height: 60,
    width: '100%',
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
  continueBottunText:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  }
})