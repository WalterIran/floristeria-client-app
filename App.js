import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/TabNavigation";
import { AuthProvider } from "./src/context/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer >
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
