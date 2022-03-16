
import { StyleSheet, Text, View ,Image,Pressable, ScrollView, ActivityIndicator} from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {useState, useEffect} from 'react';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import "intl";
import "intl/locale-data/jsonp/en";

const Product = ({route}) => {
  const [datos,useData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { productId } = route?.params;
  const {auth} = useAuth();
  const navigation = useNavigation();
  
  const formatter = new Intl.NumberFormat('es-HN', {
    style: 'currency',
    currency: 'HNL'
  });

  const getProduct = () => {
    axios.get(`/products/byid/${productId}`)
     .then(function (response){
        useData(response.data.product);
     })
     .catch(function (error){
       alert(error);
       console.error(error)
     });
  }

  const addToCart = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/shopping-cart/find-user-cart/${auth.user.id}`);
      const cartId = response.data.cartId;
      const response2 = await axios.post(`/shopping-cart/${cartId}/product/${productId}/new`);
      alert('Producto agregado al carrito');
      navigation.navigate('Payment')
    } catch (error) {
      alert('Algo Salió mal');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProduct()
  }, []);
  
  return (
    <ScrollView>
      {
        datos !== null ? (

        <SafeAreaView style={styles.mainContainer}>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>{datos.productName}</Text>
            <Text style={styles.price}>{formatter.format(datos.price)}</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image 
              style={styles.img}
              source={{ uri: datos.productImgUrl}} 
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textTitle}>{datos.productDescriptionTitle}</Text>
            <Text style={styles.textDescription}>{datos.productDescription}</Text>
          </View>

          <View style={{width:'100%', paddingHorizontal: 10}}>
            <Pressable style={styles.continueBotton} onPress={addToCart}>
                  <Text style={styles.continueBottonText}>Agregar a carrito</Text>
                  {loading && <ActivityIndicator />}
            </Pressable>
          </View>
        </SafeAreaView>
        ) : (
          <ActivityIndicator />
        )
      }
    </ScrollView>
  )
}

export default Product

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    flexDirection:'column'
  },
  headerContainer:{
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgContainer:{
    flexDirection: 'row',
    width: '100%',
    height: 400,
    marginBottom: 8,
    backgroundColor: '#333',
  },  
  img:{
    height: '100%',
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  infoContainer:{
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title:{
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  price:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#BFA658',
    
  },
  textTitle:{
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  textDescription:{
    fontSize: 16,
    paddingVertical: 4,
    color: '#000',
  },
  continueBotton:{
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
  continueBottonText:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
  }
});