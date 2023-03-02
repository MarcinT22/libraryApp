import { View, ScrollView } from "react-native";
import React from "react";
import { books } from "../data/books";
import OrderedBookCard from "../components/books/OrderedBookCard";

const OrdersArchiveScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 40 }}
      className="flex-1 bg-white p-5"
    >
      {books.slice(0, 2).map((book) => {
        return (
          <View className="border-b border-[#ECECEC] pb-5 mb-5" key={book.id}>
            <OrderedBookCard data={book} returnedDate={"21.03.2023"} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default OrdersArchiveScreen;
