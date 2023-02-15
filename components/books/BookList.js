import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BookList = ({ data }) => {
  const navigation = useNavigation();
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20 }}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("BookScreen", { data: item })}
        >
          <View className="w-28 mr-4">
            <Image
              className="w-full h-40 rounded-xl"
              source={{ uri: item.imgUrl }}
              resizeMode="cover"
            />
            <Text
              numberOfLines={1}
              className="text-xs font-[Poppins-Regular] mt-1"
            >
              {item.category}
            </Text>
            <Text
              numberOfLines={2}
              className="text-sm font-[Poppins-Bold] mt-1 leading-4"
            >
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default BookList;
