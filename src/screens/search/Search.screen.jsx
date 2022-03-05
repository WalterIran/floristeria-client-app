import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

//Importar componente
import SearchBar from '../../components/SearchBar';

const Search = () => {
  return (
    <SafeAreaView style = {{flex: 1, paddingHorizontal: 16, paddingVertical: 16}}>
      <SearchBar />
    </SafeAreaView>
  );
}

export default Search

const styles = StyleSheet.create({
  
})
