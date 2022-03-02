import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//Screens
import UserMenu from '../screens/users/Menu';
import AuthNavigation from "./AuthNavigation";

const UserNavigation = ({isLogged}) => {
    return(
        <Stack.Navigator initialRouteName="UserMenu">
            <Stack.Screen 
                name="UserMenu"
                component={UserMenu}
                options={{
                    title: "Mi Cuenta"
                }}
            />
            <Stack.Screen 
                name="EditProfile"
                component={UserMenu}
                options={{
                    title: "Editar Perfil"
                }}
            />
        </Stack.Navigator>
    );
}

export default UserNavigation;
