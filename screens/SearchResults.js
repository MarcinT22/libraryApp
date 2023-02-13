import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SearchButton from "../components/SearchButton";
import Lottie from "lottie-react-native";
import { books } from "../data/books";
import BookCard from "../components/books/BookCard";
import BookList from "../components/books/BookList";

const SearchResults = ({ navigation }) => {
  const {
    params: { textSearched },
  } = useRoute();

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const wordsArray = textSearched.split(" ");

    const filterResults = books.reduce((filtered, book) => {
      wordsArray.map((item) => {
        if (
          (book.title.toLowerCase().includes(item.toLowerCase()) ||
            book.category.toLowerCase().includes(item.toLowerCase()) ||
            book.description.toLowerCase().includes(item.toLowerCase()) ||
            book.author.toLowerCase().includes(item.toLowerCase())) &&
          !filtered.includes(book)
        ) {
          filtered.push(book);
        }
      });

      return filtered;
    }, []);

    setSearchResults(filterResults);
  }, []);

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
            Wyniki wyszukiwania
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white rounded-t-[15px] mt-[-15px] "
      >
        <View className="flex-1    relative z-10 p-5 pb-0 ">
          <SearchButton textSearched={textSearched} />
        </View>
        <View className="pb-2 flex-1">
          {searchResults == 0 ? (
            <View>
              <View className="justify-center items-center px-5 mt-6 ">
                <Lottie
                  source={require("../assets/lottie/90755-no-search-result")}
                  autoPlay
                  className="w-36"
                />
                <Text className="text-[#333] font-[Poppins-Regular] text-base text-center mt-4">
                  Nie znaleziono książek zawierających frazę "{textSearched}"
                </Text>
              </View>
              <View className="mt-8 pb-16">
                <Text className="text-lg mx-5 color-black font-[Poppins-Bold] leading-5 pt-2 mb-4">
                  Może zainteresują Cię te pozycje:
                </Text>
                <BookList data={books.reverse().slice(0, 10)} />
              </View>
            </View>
          ) : (
            <View className="px-5">
              <View className="pb-5 mt-6 flex-1">
                {searchResults.map((book) => {
                  return <BookCard data={book} key={book.id} />;
                })}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchResults;
