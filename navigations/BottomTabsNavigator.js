import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";

import BooksNavigator from "./BooksNavigator";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: "#444",
        tabBarActiveTintColor: "#F15E3B",
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#EAEAEA",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          position: "absolute",
          // left: 10,
          // right: 10,
          // bottom: 0,
        },
        headerShown: false,

        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "Poppins-Regular",
          marginTop: -8,
          marginBottom: 3,
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
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={BooksNavigator}
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
