import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

import CategoryList from "../components/categories/CategoryList";
import { categories } from "../data/categories";
import { books } from "../data/books";

import { useNavigation } from "@react-navigation/native";
import BookCard from "../components/books/BookCard";
import SearchButton from "../components/SearchButton";

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
            <View className="relative z-0">
              <View className="p-5 pb-0">
                <SearchButton dark={true} />
              </View>
              <View>
                <Text className="color-white text-lg font-[Poppins-Bold] my-4 px-5">
                  Kategorie książek
                </Text>
                <CategoryList data={categories} />
              </View>
            </View>
            <View className="flex-1 pb-10  bg-white rounded-t-[15px] relative mt-2 z-10 p-5">
              <Text className="text-xl font-[Poppins-Bold] mb-3">Nowości</Text>

              <View className="pb-2">
                {books
                  .reverse()
                  .slice(0, 5)
                  .map((book) => {
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
