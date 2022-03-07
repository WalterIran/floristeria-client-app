import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//Importar componente
import SearchBar from '../../components/SearchBar';

const Search = () => {
  const [results, setResults] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if(results) {
      navigation.navigate('SearchResults', {results})
    }
  }, [results]);
  

  return (
    <SafeAreaView style = {{flex: 1, paddingHorizontal: 16, paddingVertical: 16}}>
      <SearchBar setProducts={setResults} setLoading={setLoading} />
    </SafeAreaView>
  );
}

export default Search

const styles = StyleSheet.create({
  
})
