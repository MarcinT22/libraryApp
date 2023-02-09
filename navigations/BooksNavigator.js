import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookListScreen from "../screens/BookListScreen";
import BookListByCategory from "../screens/BookListByCategory";

const Stack = createNativeStackNavigator();

const BooksNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      screen
    >
      <Stack.Screen name="BookList" component={BookListScreen} />
      <Stack.Screen name="BookListByCategory" component={BookListByCategory} />
    </Stack.Navigator>
  );
};

export default BooksNavigator;
