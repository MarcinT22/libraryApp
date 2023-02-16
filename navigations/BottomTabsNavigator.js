import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "../screens/HomeScreen";

import BookListScreen from "../screens/BookListScreen";
import SearchScreen from "../screens/SearchScreen";
import SearchNavigator from "./SearchNavigator";
import { useNavigation } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";
import { selectCartItems } from "../slices/cartSlice";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const items = useSelector(selectCartItems);

  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={{
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: "#444",
        tabBarActiveTintColor: "#F15E3B",
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: "#f5f5f5",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          position: "absolute",
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={{
          title: "Szukaj",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={30} />
          ),
        }}
        listeners={{
          tabPress: () => {
            navigation.navigate("SearchNavigator", { screen: "Search" });
          },
        }}
      />
      <Tab.Screen
        name="BookList"
        component={BookListScreen}
        options={{
          title: "Książki",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="book-open-page-variant-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Koszyk",
          tabBarBadge: items.length,
          tabBarBadgeStyle: {
            backgroundColor: "#F15E3B",
            fontSize: 10,
            marginTop: -2,
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
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
