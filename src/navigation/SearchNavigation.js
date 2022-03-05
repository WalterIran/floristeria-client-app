import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import SearchScreen from '../screens/search/Search.screen';
import SearchResultsScreen from '../screens/search/SearchResults.screen';

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
        </Stack.Navigator>
    );
}

export default SearchNavigation;