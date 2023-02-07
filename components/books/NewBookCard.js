import React from "react";
import { Image, Text, View } from "react-native";

export default function NewBookCard({ data }) {
  console.log(data);
  return (
    <View className="flex-row flex-wrap border-b border-[#ECECEC] pb-4 mb-4">
      <View className="w-1/3 ">
        <Image
          className="w-28 h-24 rounded-xl"
          source={{
            uri: "https://ecsmedia.pl/c/milczenie-lasu-w-iext115552196.jpg",
          }}
          resizeMode="cover"
        />
      </View>
      <View className="w-2/3 px-1">
        <Text className="text-xs color-black font-[Poppins-Regular]">
          Author
        </Text>
        <Text className="text-base color-[#F15E3B] font-[Poppins-SemiBold]">
          Słowa, z którymi was zostawiam
        </Text>
        <Text className="text-sm color-[#8C8C8C] font-[Poppins-Regular]">
          Piotr Pawlukiewicz
        </Text>
      </View>
    </View>
  );
}
