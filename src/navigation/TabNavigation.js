import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';

//Screens or navigators
import UserNavigation from "./UserNavigation";
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/search/Search.screen';
import CartScreen from '../screens/cart/Cart.screen';
import OrdersNavigation from './OrdersNavigation';

//Auth
import { getData, storeData } from '../utils/asyncStorage';
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
const REFRESH_URL = '/auth/mobile/refresh-token/';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const { setAuth, auth } = useAuth();

    useEffect(async () => {
        try {
            let res = await getData();
            if(res !== null){
                const response = await axios.post(REFRESH_URL + res?.user?.id,
                    JSON.stringify({refreshToken: res.refreshToken}),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                const user = response?.data;
                await storeData(user);
                res = await getData();
                setAuth({...res});
            }
        } catch (error) {
            alert(error)
        }
    }, [])
    

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
                component={UserNavigation}
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
                component={SearchScreen} 
                options={{
                    headerTitle: "Búsqueda",
                    tabBarLabel: "Búsqueda",
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