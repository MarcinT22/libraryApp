import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { books } from "../data/books";
import OrderedBookCard from "../components/books/OrderedBookCard";
import { useNavigation } from "@react-navigation/native";

const PendingOrdersScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
      className="flex-1 bg-white p-5"
    >
      {books.slice(0, 2).map((book) => {
        return (
          <View className="border-b border-[#ECECEC] pb-5 mb-5" key={book.id}>
            <TouchableOpacity
              onPress={() => navigation.navigate("OrderDetailsScreen")}
            >
              <OrderedBookCard data={book} status={book.id} />
            </TouchableOpacity>
          </View>
        );
      })}

      <TouchableOpacity
        onPress={() => navigation.navigate("OrderDetailsScreen")}
      >
        <View className="rounded-[5px] bg-[#F0FAFF]  py-3 px-4">
          <Text className="text-[#3BAFF1] text-base uppercase font-[Poppins-Bold] mb-1">
            Multipaczka
          </Text>
          {books.slice(3, 6).map((book) => {
            return (
              <View className="py-2" key={book.id}>
                <OrderedBookCard data={book} />
              </View>
            );
          })}
          <Text className="mt-2 uppercase text-[#8C8C8C] text-xs font-[Poppins-Bold]">
            Status:
            <Text
              className={`text-black ${
                2 == 1 ? "text-[#F15E3B]" : "text-black"
              }`}
            >
              {2 == 1 ? " Gotowa do odbioru" : " W trakcie realizacji"}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PendingOrdersScreen;
