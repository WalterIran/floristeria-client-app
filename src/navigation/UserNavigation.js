import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//Screens
import UserMenu from '../screens/users/UserOpts.screen';
import EditProfile from '../screens/users/EditProfile.screen';
import ForgotPassword from "../screens/auth/ForgotPassword";
import ChangePassword from "../screens/auth/ChangePassword";
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
                component={EditProfile}
                options={{
                    title: "Editar Perfil"
                }}
            />
            <Stack.Screen 
                name="SendEmail"
                children={() => <ForgotPassword showBack={false} />}
                options={{
                    title: "Código de Verificación"
                }}
            />
            <Stack.Screen 
                name="ChangePassword"
                children={() => <ChangePassword showBack={false} />}
                options={{
                    title: "Seguridad"
                }}
            />
        </Stack.Navigator>
    );
}

export default UserNavigation;
