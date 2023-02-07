import { FlatList } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategoriesList({ data }) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 20 }}
      horizontal
      data={data}
      renderItem={({ item }) => <CategoryCard data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
