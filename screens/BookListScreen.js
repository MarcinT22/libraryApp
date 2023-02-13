import { View, Text, ScrollView, TextInput, Animated } from "react-native";
import React from "react";
import CategoryList from "../components/categories/CategoryList";
import { categories } from "../data/categories";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BookCard from "../components/books/BookCard";
import { books } from "../data/books";
import { useNavigation } from "@react-navigation/native";
import SearchButton from "../components/SearchButton";
const BookListScreen = () => {
  return (
    <View className="flex-1 bg-[#343434]">
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        <View className=" relative z-0">
          <View>
            <Text className="color-white text-lg font-[Poppins-Bold] my-4 text-center">
              Kategorie książek
            </Text>
            <CategoryList data={categories} />
          </View>
        </View>
        <View className="flex-1 pb-10 bg-white rounded-t-[15px] mt-2 relative z-10 p-5">
          <SearchButton />
          <View className="mt-6 pb-4">
            {books.reverse().map((book) => {
              return <BookCard data={book} key={book.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookListScreen;
