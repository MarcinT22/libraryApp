import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CartScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-[#343434]">
      <View className="relative z-0 px-5 bg-[#343434] pb-5">
        <View className="flex-row items-center justify-center">
          <TouchableOpacity
            className="absolute left-0"
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" color="#fff" size={30} />
          </TouchableOpacity>
          <Text className="color-white text-lg font-[Poppins-Bold] my-4 text-center">
            Koszyk
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white rounded-t-[15px] mt-[-15px] "
      ></ScrollView>
    </View>
  );
};

export default CartScreen;
