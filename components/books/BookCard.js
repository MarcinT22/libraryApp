import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function BookCard({ data, news }) {
  return (
    <TouchableOpacity className="flex-row flex-wrap border-b border-[#ECECEC] pb-4 mb-4">
      <View className="w-1/3 ">
        <Image
          className="w-full h-24 rounded-xl"
          source={{
            uri: data.imgUrl,
          }}
          resizeMode="cover"
        />
      </View>
      <View className="w-2/3 px-4">
        <Text className="text-xs color-black font-[Poppins-Regular]">
          {data.category}
        </Text>
        <Text
          className={`${
            news ? "color-[#F15E3B]" : "color-black"
          } text-base font-[Poppins-SemiBold] leading-4 pt-1`}
        >
          {data.title}
        </Text>
        <Text className="text-sm color-[#8C8C8C] font-[Poppins-Regular]">
          {data.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
