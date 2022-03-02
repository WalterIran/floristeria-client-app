import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import OrdersScreen from "../screens/orders/Orders.screen";
import OrderDetail from "../screens/orders/OrderDetail.screen";

const OrdersNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Orders"
                component={OrdersScreen}
                options={{
                    title: "Mis Pedidos"
                }}
            />
            <Stack.Screen 
                name="OrderDetail"
                component={OrderDetail}
                options={{
                    title: "Detalle del Pedido"
                }}
            />
        </Stack.Navigator>
    );
}

export default OrdersNavigation;