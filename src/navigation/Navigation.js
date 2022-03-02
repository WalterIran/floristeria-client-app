import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

import TabNavigation from "./TabNavigation";
import AuthNavigation from "./AuthNavigation";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [isLogged, setIsLogged] = useState(false);
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Main"
                component={TabNavigation}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Auth"
                component={AuthNavigation}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}

export default Navigation