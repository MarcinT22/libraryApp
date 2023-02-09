import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CategoriesList from "../components/categories/CategoriesList";
import { categories } from "../data/categories";
import { books } from "../data/books";

import { useNavigation } from "@react-navigation/native";
import BookCard from "../components/books/BookCard";

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <View className="flex-1 bg-[#343434]">
      {!isLoading ? (
        <View>
          <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}
          >
            <View className="  relative z-0">
              <View className="p-5 pb-0">
                <TouchableOpacity
                  className="flex-row items-center bg-[#292929] h-12 rounded-[15px] px-4"
                  onPress={() => alert("test")}
                >
                  <MaterialIcons name="search" size={28} color="#fff" />
                  <Text className="text-sm color-white font-[Poppins-Regular] ml-4">
                    Wyszukaj książkę
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text className="color-white text-lg font-[Poppins-Bold] my-4 px-5">
                  Kategorie książek
                </Text>
                <CategoriesList data={categories} />
              </View>
            </View>
            <View className="flex-1 pb-10  bg-white rounded-t-[15px] relative mt-2 z-10 p-5">
              <Text className="text-xl font-[Poppins-Bold] mb-3">Nowości</Text>

              <View className="pb-2">
                {books.slice(0, 3).map((book) => {
                  return <BookCard data={book} key={book.id} news={true} />;
                })}
              </View>
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
