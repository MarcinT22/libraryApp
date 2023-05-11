import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { useCallback } from "react";

import BottomTabsNavigation from "./navigations/BottomTabsNavigation";
import BookScreen from "./screens/books/BookScreen";
import CategoriesScreen from "./screens/books/CategoriesScreen";
import BookListByCategoryScreen from "./screens/books/BookListByCategoryScreen";
import DeliverySelectionScreen from "./screens/delivery/DeliverySelectionScreen";
import { Provider } from "react-redux";
import store from "./store";
import MapScreen from "./screens/delivery/MapScreen";
import SummaryScreen from "./screens/orders/SummaryScreen";
import ThankScreen from "./screens/ThankScreen";
import OrderDetailsScreen from "./screens/orders/OrderDetailsScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";

import MyOrdersScreen from "./screens/orders/MyOrdersScreen";
import ReturnDetailsScreen from "./screens/orders/ReturnDetailsScreen";
import ChangePasswordScreen from "./screens/auth/ChangePasswordScreen";
import { STATUSBAR_PADDING } from "./constants";

import PoppinsRegular from "./assets/fonts/Poppins-Regular.ttf";
import PoppinsBold from "./assets/fonts/Poppins-Bold.ttf";
import PoppinsSemiBold from "./assets/fonts/Poppins-SemiBold.ttf";

import { useEffect } from "react";

import * as Notifications from "expo-notifications";
import { useState } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("Miscellaneous", {
      name: "Powiadomienia",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
    });
  }

  return token;
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
  }, []);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": PoppinsRegular,
    "Poppins-Bold": PoppinsBold,
    "Poppins-SemiBold": PoppinsSemiBold,
  });



  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      className="flex-1 bg-[#343434] "
      style={{ paddingTop: STATUSBAR_PADDING }}
    >
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
            <Stack.Screen
              name="ReturnDetailsScreen"
              component={ReturnDetailsScreen}
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
            <Stack.Screen
              name="ChangePasswordScreen"
              component={ChangePasswordScreen}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
