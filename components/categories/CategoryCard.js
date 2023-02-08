import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryCard({ data }) {
  return (
    <TouchableOpacity className="mr-4 w-28">
      <Image
        className="h-32 w-full rounded-xl"
        source={{
          uri: data.imgUrl,
        }}
        resizeMode="cover"
      />
      <Text className="text-white font-[Poppins-Bold] text-sm mt-2 leading-4">
        {data.title}
      </Text>
    </TouchableOpacity>
  );
}
