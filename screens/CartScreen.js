import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CartItem from "../components/cart/CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../slices/cartSlice";

const CartScreen = ({ navigation }) => {
  const items = useSelector(selectCartItems);

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
        className="flex-1 bg-white rounded-t-[15px] mt-[-15px] px-5"
      >
        {items.length > 0 ? (
          items.map((data) => {
            return <CartItem key={data.id} data={data} />;
          })
        ) : (
          <Text>Pusto!</Text>
        )}
      </ScrollView>
      <View className="bg-white px-5 pb-16 pt-4">
        <TouchableOpacity className="py-3 bg-[#F15E3B] rounded-[10px] ">
          <Text className="text-center text-white font-[Poppins-Bold] text-xl uppercase ">
            Wypożyczam
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
