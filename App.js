import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { useCallback } from "react";

import BottomTabsNavigation from "./navigations/BottomTabsNavigation";
import BookScreen from "./screens/BookScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import BookListByCategoryScreen from "./screens/BookListByCategoryScreen";
import DeliverySelectionScreen from "./screens/DeliverySelectionScreen";
import { Provider } from "react-redux";
import store from "./store";
import MapScreen from "./screens/MapScreen";
import SummaryScreen from "./screens/SummaryScreen";
import ThankScreen from "./screens/ThankScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import MyOrdersScreen from "./screens/MyOrdersScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {}, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-[#343434] ">
      <StatusBar style="light" backgroundColor="rgba(0,0,0,0)" />
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: "fade",
            }}
            initialRouteName="TabNavigator"
          >
            <Stack.Screen
              name="TabNavigator"
              component={BottomTabsNavigation}
            />
            <Stack.Screen
              name="BookScreen"
              component={BookScreen}
              options={{ animation: "flip" }}
            />
            <Stack.Screen
              name="BookListByCategoryScreen"
              component={BookListByCategoryScreen}
            />

            <Stack.Screen
              name="CategoriesScreen"
              component={CategoriesScreen}
            />
            <Stack.Screen
              name="DeliverySelectionScreen"
              component={DeliverySelectionScreen}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                presentation: "transparentModal",
              }}
            />
            <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
            <Stack.Screen name="ThankScreen" component={ThankScreen} />
            <Stack.Screen
              name="OrderDetailsScreen"
              component={OrderDetailsScreen}
            />
            <Stack.Group
              screenOptions={{
                animation: "slide_from_right",
              }}
            >
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </Stack.Group>
            <Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
