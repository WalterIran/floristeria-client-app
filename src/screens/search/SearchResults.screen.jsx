import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import SearchBar from '../../components/SearchBar';

//Components
import ProductResult from '../../components/ProductResult';

const SearchResults = ({route}) => {
  const { results } = route?.params;

  const [ products, setProducts] = useState(results);
  const [ loading, setLoading ] = useState(false);

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

  return (
    <SafeAreaView style = {{flex: 1, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: "#fff"}}>
      <SearchBar setProducts={setProducts} setLoading={setLoading}/>
      {
        loading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 16}} >
            <Text>Resultados encontrados: {products.length}</Text>
            {
              products.map((product) => {
                return (
                  <ProductResult
                      key={product.id}
                      productId={product.id}
                      img={product.productImgUrl} 
                      title={product.productName}
                      desc={product.productDescriptionTitle}
                      price={product.price}
                      discount={defineDiscount(product.price, product.discount, product.discountExpirationDate, product.product_tag)}
                  />
                );
              })
            }
          </ScrollView>
        )
      }
    </SafeAreaView>
  )
}

export default SearchResults;

const styles = StyleSheet.create({
});