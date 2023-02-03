import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryCard() {
  return (
    <TouchableOpacity>
      <Image
        className="h-32 w-28 rounded-[15px]"
        source={{
          uri: "https://a.allegroimg.com/s512/117a0d/fa8efcbe4988b18ea648a8c9664a/SLOWA-Z-KTORYMI-WAS-ZOSTAWIAM-PIOTR-PAWLUKIEWICZ",
        }}
      />
      <Text className="text-white font-[Poppins-Bold] text-base mt-1">
        Kryminał react-native-touch-through-view
      </Text>
    </TouchableOpacity>
  );
}
