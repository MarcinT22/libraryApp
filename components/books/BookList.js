import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const BookList = ({ data }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20 }}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
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
      )}
    />
  );
};

export default BookList;
