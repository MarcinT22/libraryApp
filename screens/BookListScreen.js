import { View, Text, ScrollView, TextInput, Animated } from "react-native";
import React from "react";
import CategoriesList from "../components/categories/CategoriesList";
import { categories } from "../data/categories";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BookCard from "../components/books/BookCard";
import { books } from "../data/books";
import { useNavigation } from "@react-navigation/native";
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
            <CategoriesList data={categories} />
          </View>
        </View>
        <View className="flex-1 pb-10 bg-white rounded-t-[15px] mt-2 relative z-10 p-5">
          <View className="bg-[#E8E6E6]  rounded-[15px] flex-row items-center justify-center  h-12 mb-6 ">
            <MaterialIcons name="search" size={28} color="#8C8C8C" />
            <TextInput
              placeholder="Wyszukaj książkę"
              selectionColor="#F15E3B"
              cursorColor="#F15E3B"
              placeholderTextColor="#8C8C8C"
              className="text-sm font-[Poppins-Regular] pt-1 pl-4  mr-2 w-4/5 "
            />
          </View>
          <View className="pb-4">
            {books.map((book) => {
              return <BookCard data={book} key={book.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookListScreen;
