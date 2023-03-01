import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import MyOrdersTabNavigation from "../navigations/MyOrdersTabNavigation";

const MyOrdersScreen = () => {
  return (
    <View className="flex-1 bg-[#343434]">
      <Header title="Moje zamówienia" goBack={true} />
      <View className="flex-1 rounded-t-[15px] overflow-hidden">
        <MyOrdersTabNavigation />
      </View>
    </View>
  );
};

export default MyOrdersScreen;
