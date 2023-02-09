import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function CategoryCard({ data, light, active }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className=" w-28"
      onPress={() =>
        navigation.navigate("Books", {
          screen: "BookListByCategory",
          params: { data: data },
          initial: false,
        })
      }
    >
      <Image
        className="h-32 w-full rounded-xl"
        source={{
          uri: data.imgUrl,
        }}
        resizeMode="cover"
      />
      <Text
        className={`${
          active ? "text-[#F15E3B]" : light ? "text-black" : "text-white"
        }  font-[Poppins-Bold] text-sm mt-2 leading-4`}
      >
        {data.title}
      </Text>
    </TouchableOpacity>
  );
}
