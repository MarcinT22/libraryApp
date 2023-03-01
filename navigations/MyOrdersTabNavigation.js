import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PendingOrders from "../screens/PendingOrdersScreen";
import OrdersToBeReturned from "../screens/OrdersToBeReturnedScreen";
import OrdersArchive from "../screens/OrdersArchiveScreen";
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const MyOrdersTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="PendingOrders"
      backBehavior="order"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          textTransform: "none",
          fontFamily: "Poppins-Regular",
        },

        tabBarStyle: {
          backgroundColor: "#fff",
          height: 50,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: "#D9D9D9",
        },
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#8C8C8C",
        tabBarPressColor: "transparent",
        tabBarIndicatorStyle: { backgroundColor: "#F15E3B" },
      }}
    >
      <Tab.Screen
        name="PendingOrders"
        options={{
          title: "Oczekujące",
        }}
        component={PendingOrders}
      />
      <Tab.Screen
        name="OrdersToBeReturned"
        options={{ title: "Do oddania" }}
        component={OrdersToBeReturned}
      />
      <Tab.Screen
        name="OrdersArchive"
        options={{ title: "Archiwum" }}
        component={OrdersArchive}
      />
    </Tab.Navigator>
  );
};

export default MyOrdersTabNavigation;
