import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Cart from "../screens/cart/Cart.screen";
import Delivery from "../screens/cart/Delivery.screen";

const CartNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false
                }}
            />
           <Stack.Screen 
                name="Delivery.screen"
                component={Delivery}
                options={{
                    title: "Delivery"
                }}
            />
        </Stack.Navigator>
    );
}
export default CartNavigation;