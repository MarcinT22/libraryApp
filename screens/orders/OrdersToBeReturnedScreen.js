import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { books } from "../../data/books";
import OrderedBookCard from "../../components/books/OrderedBookCard";
import QRCode from "react-native-qrcode-svg";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
const OrdersToBeReturnedScreen = () => {
  const navigation = useNavigation();
  const [selectedBooks, setSelectedBooks] = useState([]);

  function isSelected(book) {
    return selectedBooks.includes(book);
  }

  function selectBook(book) {
    if (!isSelected(book)) {
      setSelectedBooks([...selectedBooks, book]);
    } else {
      setSelectedBooks(selectedBooks.filter((item) => item.id != book.id));
    }
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: selectedBooks.length ? withSpring(0) : withSpring(100),
        },
      ],
    };
  });

  return (
    <View className="flex-1">
      <ScrollView className="bg-white p-5 pb-20">
        <View className="pb-24">
          <Text className="text-[#8C8C8C] uppercase font-[Poppins-Bold] mb-4 text-xs">
            Książki nadane do zwrotu:
          </Text>

          {books.slice(2, 4).map((book) => {
            return (
              <TouchableOpacity
                key={book.id}
                onPress={() => navigation.navigate("ReturnDetailsScreen")}
                className="border-b border-[#ECECEC] pb-5 mb-5 "
              >
                <OrderedBookCard data={book} returnDetails={true} />
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            className="mb-6"
            onPress={() => navigation.navigate("OrderDetailsScreen")}
          >
            <View className="rounded-[5px] bg-[#F0FAFF]  py-3 px-4">
              <Text className="text-[#3BAFF1] text-base uppercase font-[Poppins-Bold] mb-1">
                Multipaczka
              </Text>
              {books.slice(1, 3).map((book) => {
                return (
                  <View className="py-2" key={book.id}>
                    <OrderedBookCard data={book} />
                  </View>
                );
              })}
              <Text className="text-sm text-[#F15E3B] font-[Poppins-Bold] mt-2 uppercase text-xs">
                Szczegóły zwrotu
              </Text>
            </View>
          </TouchableOpacity>

          <Text className="text-[#8C8C8C] uppercase font-[Poppins-Bold] mb-4 text-xs">
            Nadaj książki do zwrotu:
          </Text>
          {books.slice(5, 8).map((book) => {
            return (
              <TouchableOpacity
                onPress={() => selectBook(book)}
                key={book.id}
                className="flex-row border-b border-[#ECECEC] pb-5 mb-5 "
              >
                <View
                  className={`rounded-[3px] w-5 h-5 border border-[#F15E3B] mr-3 relative ${
                    isSelected(book) ? "bg-[#F15E3B]" : "bg-white"
                  }`}
                >
                  <MaterialCommunityIcons name="check" color="#fff" size={18} />
                </View>
                <View>
                  <OrderedBookCard data={book} deliveryDate={"31.03.2023"} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View className=" px-5 pb-4 pt-4 absolute left-0 right-0 bottom-2">
        <Animated.View style={animatedStyles}>
          <TouchableOpacity
            disabled={selectedBooks.length == 0}
            className="py-3 bg-[#F15E3B] rounded-[10px]"
            onPress={() =>
              navigation.navigate("SummaryScreen", {
                returnedBooks: selectedBooks,
              })
            }
          >
            <Text className="text-center text-white font-[Poppins-Bold] text-lg uppercase ">
              Zwróć wybrane książki
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default OrdersToBeReturnedScreen;
