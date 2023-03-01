import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { books } from "../data/books";
import OrderedBookCard from "../components/books/OrderedBookCard";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
const OrdersToBeReturnedScreen = () => {
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
      <ScrollView className="bg-white p-5">
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
      </ScrollView>
      <View className="bg-white px-5 pb-4 pt-4">
        <Animated.View style={animatedStyles}>
          <TouchableOpacity
            disabled={selectedBooks.length == 0}
            className="py-3 bg-[#F15E3B] rounded-[10px]"
            onPress={() => alert("test")}
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
