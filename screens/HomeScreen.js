import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CategoriesList from "../components/categories/CategoriesList";
import CategoryCard from "../components/categories/CategoryCard";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View className="flex-1 bg-[#343434]">
      {!isLoading ? (
        <View>
          <ScrollView>
            <View className="h-[300px] bg-[#343434] p-5">
              <TouchableOpacity
                className="flex-row items-center bg-[#292929] h-10 rounded-[15px] px-4"
                onPress={() => alert("test")}
              >
                <MaterialIcons name="search" size={22} color="#fff" />
                <Text className="text-sm color-white font-[Poppins-Regular] ml-4">
                  Wyszukaj książkę
                </Text>
              </TouchableOpacity>
              <Text className="color-white text-lg font-[Poppins-Bold] my-4">
                Kategorie książek
              </Text>
              <CategoryCard />
            </View>
            <View className="flex-1 bg-white rounded-t-[15px] ">
              <View className="h-[1000px]"></View>
            </View>
          </ScrollView>
        </View>
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default HomeScreen;
