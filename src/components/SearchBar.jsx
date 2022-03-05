import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
    const navigation = useNavigation();

    const handleSearch = () => {
        navigation.navigate('SearchResults')
    }

  return (
    <View style={styles.searchContainer}>
        <IonIcons name='search-outline' color={'#ababab'} size={32} />
        <TextInput
            style={styles.input}
            placeholder='Ingrese su búsqueda...'
            onSubmitEditing={handleSearch}
        />
    </View>
  )
}

export default SearchBar;

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        flex: 1,
        fontSize: 18,
        marginLeft: 8
    }
});