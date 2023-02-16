import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { books } from "../data/books";
import BookCard from "../components/books/BookCard";

import SearchButton from "../components/SearchButton";
import Lottie from "lottie-react-native";
import Header from "../components/Header";
const BookListByCategoryScreen = ({ navigation }) => {
  const {
    params: { data },
  } = useRoute();

  const booksByCategory = books.filter((item) => item.category == data.title);

  return (
    <View className="flex-1 bg-[#343434]">
      <Header title={data.title} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white rounded-t-[15px]"
      >
        <View className="flex-1   relative z-10 p-5 pb-0 ">
          <SearchButton />
          <View className="border-b border-[#ECECEC] pb-2 mt-3">
            <TouchableOpacity
              onPress={() => navigation.navigate("CategoriesScreen", { data })}
            >
              <Text
                className="text-sm uppercase font-[Poppins-Bold] 
             text-[#F15E3B]"
              >
                Kategorie
              </Text>
            </TouchableOpacity>
          </View>
          <View className="pb-2 mt-6 flex-1">
            {booksByCategory.length ? (
              booksByCategory.map((book) => {
                return (
                  <View
                    className="border-b border-[#ECECEC] pb-4 mb-4"
                    key={book.id}
                  >
                    <BookCard data={book} />
                  </View>
                );
              })
            ) : (
              <View>
                <View className="justify-center items-center">
                  <Lottie
                    source={require("../assets/lottie/90755-no-search-result")}
                    autoPlay
                    className="w-40"
                  />
                  <Text className="text-[#333] font-[Poppins-Regular] text-lg text-center mt-4">
                    Nie znaleziono książek w kategorii "{data.title}"
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookListByCategoryScreen;
