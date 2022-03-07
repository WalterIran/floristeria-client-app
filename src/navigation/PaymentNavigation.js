import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//Screens
import CartScreen from '../screens/cart/Cart.screen';
import AuthNavigation from "./AuthNavigation";
import useAuth from "../hooks/useAuth";

const PaymentNavigation = () => {
    const { auth } = useAuth();
    return(
        <Stack.Navigator initialRouteName="UserMenu">
            {
                auth !== null && auth !== undefined && Object.keys(auth).length !== 0? 
                (
                    <>
                    <Stack.Screen 
                        name="Cart"
                        component={CartScreen}
                        options={{
                            title: "Carrito"
                        }}
                    />
                    </>
                ) : (
                    <>
                    <Stack.Screen 
                        name="LoginStack"
                        component={AuthNavigation}
                        options={{
                            headerShown: false
                        }}
                    />
                    </>
                )
            }
        </Stack.Navigator>
    );
}

export default PaymentNavigation;
