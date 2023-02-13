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
const BookListByCategoryScreen = ({ navigation }) => {
  const {
    params: { data },
  } = useRoute();

  const booksByCategory = books.filter((item) => item.category == data.title);

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
            {data.title}
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white rounded-t-[15px] mt-[-15px]"
      >
        <View className="flex-1  bg-white  rounded-t-[15px]  relative z-10 p-5 pb-0 ">
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
                return <BookCard data={book} key={book.id} />;
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
