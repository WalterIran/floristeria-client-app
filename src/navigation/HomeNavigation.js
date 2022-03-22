import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

import HomeScreen from "../screens/Home";
import ProductScreen from '../screens/product/Product.screen';

const HomeNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false
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

export default HomeNavigation;