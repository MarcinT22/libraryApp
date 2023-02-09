import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { categories } from "../data/categories";
import CategoryCard from "../components/categories/CategoryCard";

const CategoriesScreen = ({ navigation }) => {
  const {
    params: { data },
  } = useRoute();

  return (
    <View className="flex-1 bg-[#343434]">
      <View className="relative z-0 px-5 bg-[#343434] pb-5">
        <View className="flex-row items-center justify-center">
          <TouchableOpacity
            className="absolute left-0"
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" color="#fff" size={30} />
          </TouchableOpacity>
          <Text className="color-white text-lg font-[Poppins-Bold] my-4 text-center">
            Wybierz kategorię
          </Text>
        </View>
      </View>

      <View className="flex-1 mt-[-15px]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1  bg-white  rounded-t-[15px]  relative z-10 p-5 pb-0"
        >
          <View className="flex-row flex-wrap justify-center ">
            {categories.map((category) => {
              return (
                <View className="mb-4 mx-2" key={category.id}>
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
    </View>
  );
};

export default CategoriesScreen;
