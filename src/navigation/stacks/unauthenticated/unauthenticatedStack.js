import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signup } from "@screens/auth";
import { Login } from "@screens/auth/signin/signin";

const Stack = createNativeStackNavigator();

export const UnauthenticatedStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
)