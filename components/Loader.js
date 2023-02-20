import { View, Text } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";

const Loader = () => {
  return (
    <View className="flex-1 bg-[#343434] justify-center items-center">
      <Lottie
        source={require("../assets/lottie/8617-open-book.json")}
        autoPlay
        className="mt-[-40px]"
      />

      <Text className="text-white text-sm text-center font-[Poppins-Regular] mt-20">
        Wczytywanie książek...
      </Text>
    </View>
  );
};

export default Loader;
