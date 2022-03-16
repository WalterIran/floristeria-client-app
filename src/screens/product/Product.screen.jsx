
import { StyleSheet, Text, View ,Image,Pressable, ScrollView, ActivityIndicator} from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {useState, useEffect} from 'react';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { formatter } from '../../utils/formatter';

const Product = ({route}) => {
  const [datos,useData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ discount, setDiscount ] = useState(0);
  const { productId } = route?.params;
  const {auth} = useAuth();
  const navigation = useNavigation();

  const getProduct = () => {
    axios.get(`/products/byid/${productId}`)
     .then(function (response){
        useData(response.data.product);
        const datos = response.data.product;
        defineDiscount(datos.price, datos.discount, datos.discountExpirationDate, datos.product_tag)
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
      const response2 = await axios.post(`/shopping-cart/${cartId}/product/${productId}/new`,
        {
          price: discount > 0 ? discount : datos.price
        }
      );
      alert('Producto agregado al carrito');
      navigation.navigate('Payment')
    } catch (error) {
      alert('Algo Salió mal');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  const defineDiscount = (prodPrice, prodDiscount, prodExpDate, prodTags) => {
    let disc = 0
    const tagDiscounts = prodTags.filter(tag => {
      
      if(new Date(tag.tag.discountExpirationDate) > new Date() && tag.tag.discount !== null){
        return tag.tag.discount;
      }
    }).map(item => item.tag.discount);

    const maxTagDiscount = Math.max(...tagDiscounts);
    
    prodDiscount = prodDiscount || 0;
    
    if(prodExpDate === null && maxTagDiscount === 0) {
      disc = 0;
    }else{
      if(prodExpDate === null && maxTagDiscount !== 0){
        disc = maxTagDiscount;
      }else{
        if(prodDiscount > maxTagDiscount){
          disc = prodDiscount;
        }else{
          disc = maxTagDiscount;
        }
      }
    }


    disc /= 100;

    if(disc > 0){
      setDiscount(prodPrice - (prodPrice * disc));
    }
  }

  const priceStyle = {
    fontSize: 25,
    fontWeight: 'bold',
    color: discount > 0 ? '#aaa' :'#BFA658',
    textDecorationLine: discount > 0 ? 'line-through' : 'none'
  }
  
  return (
    <ScrollView>
      {
        datos !== null ? (

        <SafeAreaView style={styles.mainContainer}>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>{datos.productName}</Text>
            <View style={styles.priceSection}>
                {discount > 0 && (
                    <>
                        <Text style={styles.discount}>{formatter.format(discount)}</Text>
                        <Text> - </Text>
                    </>
                )}
                <Text style={priceStyle}>{formatter.format(datos.price)}</Text>
            </View>
            {/* <Text style={styles.price}>{formatter.format(datos.price)}</Text> */}
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
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discount: {
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