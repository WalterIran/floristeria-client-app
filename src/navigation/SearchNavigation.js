import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import SearchScreen from '../screens/search/Search.screen';
import SearchResultsScreen from '../screens/search/SearchResults.screen';
import ProductScreen from '../screens/product/Product.screen';

const SearchNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SearchBar"
                component={SearchScreen}
                options={{
                    title: "Búsquedas"
                }}
            />
            <Stack.Screen 
                name="SearchResults"
                component={SearchResultsScreen}
                options={{
                    title: "Resultados de búsqueda"
                }}
            />
            <Stack.Screen 
                name="ProductScreen"
                component={ProductScreen}
                options={{
                    title: "Producto"
                }}
            />
        </Stack.Navigator>
    );
}

export default SearchNavigation;