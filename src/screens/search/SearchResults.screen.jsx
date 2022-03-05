import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import SearchBar from '../../components/SearchBar';

//Components
import ProductResult from '../../components/ProductResult';

const SearchResults = () => {
  return (
    <SafeAreaView style = {{flex: 1, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: "#fff"}}>
      <SearchBar />
        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingVertical: 16}} >
            <ProductResult 
                img={require('../../assets/Girasoles.png')} 
                title={'Maldivas'}
                desc={'Rojo sobre lienzo blanco'}
                price={'59.99'}
            />
            <ProductResult 
                img={require('../../assets/Girasoles.png')} 
                title={'Flores Rojas'}
                desc={'Rojo sobre lienzo blanco'}
                price={'19.99'}
            />
        </ScrollView>
    </SafeAreaView>
  )
}

export default SearchResults;

const styles = StyleSheet.create({
});