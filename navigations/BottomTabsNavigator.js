import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import BookListScreen from "../screens/BookListScreen";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: "#444",
        tabBarActiveTintColor: "#F15E3B",
        tabBarStyle: {
          height: 50,
          elevation: 0,
          backgroundColor: "#EAEAEA",
          borderRadius: 15,
          position: "absolute",
          left: 10,
          right: 10,
          bottom: 10,
        },
        headerShown: false,

        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Poppins-Regular",
          marginTop: 0,
          color: "#8C8C8C",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={32}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BookList"
        component={BookListScreen}
        options={{
          title: "Książki",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
