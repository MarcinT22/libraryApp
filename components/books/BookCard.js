import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function BookCard({ data, news }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("BookScreen", { data })}
      className="flex-row flex-wrap "
    >
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
        <Text className="text-xs text-black font-[Poppins-Regular]">
          {data.category}
        </Text>
        <Text
          className={`${
            news ? "text-[#F15E3B]" : "text-black"
          } text-base font-[Poppins-SemiBold] leading-4 pt-1`}
        >
          {data.title}
        </Text>
        <Text className="text-sm text-[#8C8C8C] font-[Poppins-Regular] leading-4 pt-1">
          {data.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
