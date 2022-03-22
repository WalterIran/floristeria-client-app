import React, { useEffect, useState } from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import axios from '../api/axios';
import MenuItem from '../components/MenuItem';


const newstProductURL = '/products/newest';
const withDiscountProdURL = '/products/with-discount';

const Home = () => {
  const [newestProducts, setNewestProducts] = useState(null);
  const [withDiscountProd, setWithDiscountProd] = useState(null);

  const defineDiscount = (prodPrice, prodDiscount, prodExpDate, prodTags) => {
    let discount = 0;
    const tagDiscounts = prodTags.filter(tag => {
      
      if(new Date(tag.tag.discountExpirationDate) > new Date() && tag.tag.discount !== null){
        
        return tag.tag.discount;
      }
    }).map(item => item.tag.discount);

    const maxTagDiscount = Math.max(...tagDiscounts);
    
    prodDiscount = prodDiscount || 0;
    
    if(prodExpDate === null && maxTagDiscount === 0) {
      discount = 0;
    }else{

      if(prodExpDate === null && maxTagDiscount !== 0){
        discount = maxTagDiscount;
      }else{
        if(prodDiscount > maxTagDiscount){
          discount = prodDiscount;
        }else{
          discount = maxTagDiscount;
        }
      }  
    }
    discount /= 100;
    if(discount > 0){
      return prodPrice - (prodPrice * discount);
    }


    return 0;
  }

  const showProducts = async () => {
    try {
      const respNewest = await axios.get(newstProductURL);
      setNewestProducts(respNewest.data.products);

      const respWithDiscount = await axios.get(withDiscountProdURL);
      setWithDiscountProd(respWithDiscount.data.products);

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(async () => {
    await showProducts();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#000' }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', backgroundColor: '#fff' }}>
        <View style={{ width: '100%' }}>
          <View style={{ width: '100%', backgroundColor: '#000', height: 75, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/logo-nobg-opt.png')} style={{ resizeMode: 'contain', height: '60%' }} />
          </View>
          <Image
            source={require('../assets/Image2.jpg')}
            style={{ width: '100%', resizeMode: 'contain', top: -6 }} />

          <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center', color: '#fff', position: 'absolute', right: 0, left: 0, top: 140, bottom: 0 }} >El amor nos conecta</Text>
          <Text style={{ fontSize: 12, fontWeight: '500', textAlign: 'center', color: '#fff', position: 'absolute', right: 0, left: 0, top: 180, bottom: 0 }} >Interflora nos une, díselo con flores</Text>
        </View>

        <View style={{ width: '100%', paddingHorizontal: 12, alignItems: 'center', paddingBottom: 24 }}>
          <View style={{ width: '100%', height: 3, marginVertical: 32, backgroundColor: "#000", justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', position: 'absolute', top: -12, paddingHorizontal: 8 }}>
              <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>¡Lo más nuevo!</Text>
            </View>
          </View>

          <View style={styles.menuContainer}>
            {
              newestProducts ?  (
                <>
                {  
                  newestProducts.map((product) => {
                    return (
                      <MenuItem 
                        key={product.id}
                        productId = {product.id}
                        title={product.productName}
                        description={product.productDescriptionTitle}
                        price={parseFloat(product.price)}
                        itemImage={product.productImgUrl}
                      />
                    );
      
                  })
                }
                </>

              ) : (
                <ActivityIndicator />
              )
            }

          </View>

          <View style={{ width: '100%', height: 3, marginVertical: 32, backgroundColor: "#000", justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: '#fff', position: 'absolute', top: -12, paddingHorizontal: 8 }}>
              <Text style={{ fontSize: 26, fontWeight: 'bold', textAlign: 'center' }}>Promociones</Text>
            </View>
          </View>

          <View style={styles.menuContainer}>
            {
              withDiscountProd ? (
                <>
                  {
                    withDiscountProd.map((product) => {
                      return (
                        <MenuItem 
                          key={product.id}
                          productId = {product.id}
                          title={product.productName}
                          description={product.productDescriptionTitle}
                          price={parseFloat(product.price)}
                          discount={defineDiscount(product.price, product.discount, product.discountExpirationDate, product.product_tag)}
                          itemImage={product.productImgUrl}
                        />
                      );
                    })
                  }
                </>
              ) : ( 
                <ActivityIndicator />
              )
            }
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})
