import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

//Screens or navigators
import UserNavigation from "./UserNavigation";
import HomeScreen from '../screens/Home';
import SearchNavigation from './SearchNavigation';
import CartScreen from '../screens/cart/Cart.screen';
import OrdersNavigation from './OrdersNavigation'

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const [isLogged, setIsLogged] = useState(true);

    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            tabBarStyle: { 
                backgroundColor: 'black',
            },
            tabBarLabelStyle: {
                color: '#BFA658',
            },
            tabBarIconStyle: {
                color: '#BFA658',
            },
        }}>
            <Tab.Screen 
                name="User" 
                children={() => <UserNavigation isLogged={isLogged} />} 
                options={{
                    headerShown: false,
                    tabBarLabel: "Mi cuenta",
                    tabBarIcon: ({color, size}) => (
                    <MCIcon name="account-outline" color={'#BFA658'} size={size} />
                )
            }} />

            <Tab.Screen 
                name="Cart" 
                component={CartScreen} 
                options={{
                    headerTitle: "Carrito",
                    tabBarLabel: "Carrito",
                    tabBarIcon: ({color, size}) => (
                    <MCIcon name="shopping-outline" color={'#BFA658'} size={size} />
                )
            }} />

            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    headerTitle: "Inicio",
                    tabBarLabel: "",
                    tabBarIcon: ({color, size}) => (
                        <View style={styles.homeButton}>
                            <IonIcons name="home-outline" size={48}  color={'#BFA658'} />
                        </View>
                )
            }} />
            
            <Tab.Screen 
                name="Search" 
                component={SearchNavigation} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                    <IonIcons name="search-outline" color={'#BFA658'} size={size} />
                )
            }} />

            <Tab.Screen 
                name="History" 
                component={OrdersNavigation} 
                options={{
                    headerShown: false,
                    tabBarLabel: "Mis Pedidos",
                    tabBarIcon: ({color, size}) => (
                    <MCIcon name="format-list-bulleted" color={'#BFA658'} size={size} />
                )
            }} />
        </Tab.Navigator>
    );
}

export default TabNavigation;

const styles = StyleSheet.create({
    homeButton: {
        width: 75, 
        height: 75,
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: 'black', 
        borderWidth: 1, 
        borderRadius: 500,
    }
})