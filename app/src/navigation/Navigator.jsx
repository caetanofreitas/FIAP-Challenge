import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../constants/routes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Main";

const {
  Navigator: WrapperNavigation,
  Screen,
} = createNativeStackNavigator();

const defaultOptions = { headerShown: false };

const Navigator = () => (
  <NavigationContainer>
    <WrapperNavigation initialRouteName={routes.MAIN}>
      <Screen name={routes.LOGIN} component={Login} options={{ ...defaultOptions }} />
      <Screen name={routes.REGISTER} component={Register} options={{ ...defaultOptions }} />
      <Screen name={routes.MAIN} component={Main} options={{ ...defaultOptions }} />
    </WrapperNavigation>
  </NavigationContainer>
)

export default Navigator;
