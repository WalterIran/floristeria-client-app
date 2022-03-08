import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
import SearchBar from '../../components/SearchBar';

//Components
import ProductResult from '../../components/ProductResult';

const SearchResults = ({route}) => {
  const { results } = route?.params;

  const [ products, setProducts] = useState(results);
  const [ loading, setLoading ] = useState(false);

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