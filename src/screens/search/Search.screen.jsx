import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import { Searchbar } from 'react-native-paper';

{/*const [query, setQuery] = useState();
const [error, setError] = useState(false); */}

const Search = () => {
  return (
    
    <SafeAreaView style = {{flex: 1}}>
      <View style={styles.buscador}>
      <Searchbar
      placeholder="Ingrese su busqueda..."
      />
      </View>

      {/* <TextInput
      value={query}
      placeholder="Search"
      style={styles.TextInput}
      onChangeText={(Text) => {
        var letters = /^[A-Za-z]+$/;
        if(Text.match(letters)) {
           setQuery(Text)
           if(error)
            setError(false)
        }
        else 
          setError("Ingrese unicamente Letras");

      }}
      /> 
    */}

      <View style={{flex: 1, padding: 18}}>
      <Text>Busquedas Recientes</Text>
      </View>

    </SafeAreaView>
   
  );
}

export default Search

const styles = StyleSheet.create({
  buscador: {
    padding: 15,
  }
})
