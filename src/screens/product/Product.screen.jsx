
import { StyleSheet, Text, View ,Image,Pressable, ScrollView, ActivityIndicator} from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {useState, useEffect} from 'react';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';


const Product = ({route}) => {
  const [datos,useData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { productId } = route?.params;
  const {auth} = useAuth();
  
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
                  <Text style={styles.price}>{datos.price}</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image style={styles.img}
                      source={{ uri: datos.productImgUrl}} />
                  </View><View style={styles.infoContainer}>
                    <Text style={styles.textTitle}>{datos.productDescriptionTitle}</Text>
                    <Text style={styles.textDescription}>{datos.productDescription}</Text>
                  </View>

    
          <Pressable style={styles.continueBottun} onPress={addToCart}>
                <Text style={styles.continueBottunText}>Agregar a carrito</Text>
                {loading && <ActivityIndicator />}
          </Pressable>
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
    width:'100%',
    height:'100%',
    paddingHorizontal: 10,
    flexDirection:'column'
  },
  headerContainer:{
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgContainer:{
    flexDirection: 'row',
    width: '100%',
    height: 250,
    marginVertical: 30
  },  
  img:{
    height: 260,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  infoContainer:{
    flexDirection: 'column',
    paddingBottom: 30
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10
  },
  price:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#BFA658',
    
  },
  textTitle:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    textAlign:'center',
  },
  textDescription:{
    fontSize: 25,
    color: '#000',
    padding: 18,
    textAlign:'justify',
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
});