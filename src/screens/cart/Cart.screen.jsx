import { StyleSheet, Text, View ,Image,Pressable, ScrollView, Button, ActivityIndicator} from 'react-native'
import React from 'react';
import {useState, useEffect} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';

const Cart = () => {
  const { auth } = useAuth();
  const [datos,useData] = useState(null);
  const navigation = useNavigation();

  const goToDelivery = () => {
      navigation.navigate('Delivery');
  }
  
  const getProducts = async () => {
    const response = await axios.get(`shopping-cart/find-user-cart/${auth.user.id}`);
    axios.get(`/shopping-cart/${auth.user.id}/find-user-cart-details`)
     .then(function (response){
        useData(response.data);
     })
     .catch(function (error){
       console.error(error);
     });
  }
  
   const incrementQuantity = (id) =>{
    axios.put(`/shopping-cart/${datos[0].cartId}/product/${id}/add`)
    .then(function (response){
      //1)filtrar dentro de useData el objeto que contenga el productId == productId,  2) incrementar el objeto + 1, 3)volver introducir los datos a useData volver introducir los datos a useData 
      /*
      const products = datos.filter((product)=>{
          return product.productId == id;
        });
      
      const obj = products.filter((value)=>{
        return value.quantity = value.quantity - 1;
      });
      useData(obj);*/
     // getProducts();
    })
    .catch(function (error){
      alert(error);
    })
  }

  const decrementQuantity = (id) =>{
    axios.put(`/shopping-cart/${datos[0].cartId}/product/${id}/subtract`)
    .then(function (response){
      getProducts();    
    })
    .catch(function (error){
      alert(error);
    })
  }

  const cancelledProduct = (id) =>{
    axios.delete(`/shopping-cart/${datos[0].cartId}/product/${id}/cancel`)
    .then(function (response){
      getProducts();    
    })
    .catch(function (error){
      alert(error);
    })
  }
  useEffect(() => {
    getProducts()
  }, []);
  
  return (
    <ScrollView>
      {
        datos !== null ? (
          <SafeAreaView style={styles.mainContainer}>
            <Button title='Refrescar' onPress={getProducts} />
            {datos.length === 0 && <Text>Carrito Vacío</Text>}
          {
            datos.map((product,index)=>{
                return (
                  <View key={index} style={styles.productContainer}>
                  <View style={styles.productImageContainer}>
                    <Image 
                      source={{uri:product.product.productImgUrl}}
                      style={styles.img}
                    />
                  </View>
                  <View style={styles.productInformationContainer}>
                    <Text style={styles.title}>{product.product.productName}</Text>
                    <Text style={styles.textPrice}>$ {product.price}</Text>
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
    paddingBottom: 30
  },
  productImageContainer:{
    width: '45%'
  },
  productInformationContainer:{
    width: '45%',
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
    fontSize: 25,
    fontWeight: 'bold',
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