import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { categories } from "../../data/categories";
import CategoryCard from "../../components/categories/CategoryCard";
import Header from "../../components/Header";

const CategoriesScreen = ({ navigation }) => {
  const {
    params: { data },
  } = useRoute();

  return (
    <View className="flex-1 bg-[#343434]">
      <Header title="Wybierz kategorię" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1  bg-white  rounded-t-[15px]  relative z-10 p-5 pb-0"
      >
        <View className="flex-row flex-wrap  ">
          {categories.map((category) => {
            return (
              <View className="mb-4 px-2 w-1/3" key={category.id}>
                <CategoryCard
                  data={category}
                  light={true}
                  active={data.id == category.id ? true : false}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoriesScreen;
