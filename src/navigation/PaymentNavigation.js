import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//Screens
import CartScreen from '../screens/cart/Cart.screen';
import DeliveryScreen from '../screens/bill/DeliveryDetail';
import PaymentScreen from '../screens/bill/Payment';
import ConfirmScreen from '../screens/bill/ConfirmPurchase';
import SuccessfulScreen from '../screens/bill/SuccessfulPurchase';
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
                    <Stack.Screen 
                        name="Delivery"
                        component={DeliveryScreen}
                        options={{
                            title: "Detalle de entrega"
                        }}
                    />
                    <Stack.Screen 
                        name="PaymentMetod"
                        component={PaymentScreen}
                        options={{
                            title: "Metodo de pago"
                        }}
                    />
                    <Stack.Screen 
                        name="ConfirmPurchase"
                        component={ConfirmScreen}
                        options={{
                            title: "Confirmar la compra"
                        }}
                    />
                    <Stack.Screen 
                        name="SuccessfulPurchase"
                        component={SuccessfulScreen}
                        options={{
                            headerShown: false
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
