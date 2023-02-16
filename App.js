import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import { useCallback } from "react";

import BottomTabsNavigator from "./navigations/BottomTabsNavigator";
import BookScreen from "./screens/BookScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import BookListByCategoryScreen from "./screens/BookListByCategoryScreen";
import DeliverySelectionScreen from "./screens/DeliverySelectionScreen";
import { Provider } from "react-redux";
import store from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("zaladowano");
      console.log(fontsLoaded);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 bg-[#343434] ">
      <StatusBar style="light" backgroundColor="#343434" translucent={false} />
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: "fade",
            }}
            initialRouteName="TabNavigator"
          >
            <Stack.Screen name="TabNavigator" component={BottomTabsNavigator} />
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
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </View>
  );
}
