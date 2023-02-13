import { FlatList, View } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategoryList({ data }) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20 }}
      horizontal
      data={data}
      renderItem={({ item }) => (
        <View className="mr-4 w-28">
          <CategoryCard data={item} />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
