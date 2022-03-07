
import { StyleSheet, Text, View ,Image,Pressable, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {useState, useEffect} from 'react';
import axios from 'axios';


const Product = ({route}) => {
  const [datos,useData] = useState([]);
  const { productId } = route?.params;
  
  const getProduct = () => {
    axios.get(`http://192.168.1.10:5000/api/v1/products/byid/${productId}`)
     .then(function (response){
        useData(response.data.product);
        console.log(response.data.product);
     })
     .catch(function (error){
       alert(error);
       console.error(error)
     });
  }
  useEffect(() => {
    getProduct()
  }, []);
  
  return (
    <ScrollView>
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

   
        <Pressable style={styles.continueBottun}>
              <Text style={styles.continueBottunText}>Continuar</Text>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Product

const styles = StyleSheet.create({
  mainContainer:{
    width:'100%',
    height:'100%',
    marginTop: -30,
    padding: 0,
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