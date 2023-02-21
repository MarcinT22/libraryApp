import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";

const Account = () => {
  return (
    <View className="flex-1 bg-[#343434]">
      <Header title="Moje konto" goBack={false} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="flex-1 bg-white rounded-t-[15px]"
      >
        <View className="py-5">
          <Text className="text-black font-[Poppins-SemiBold] text-lg px-5 mb-4">
            jan.kowalski@onet.pl
          </Text>
          <View className="border-t border-[#F5F5F5]">
            <TouchableOpacity className=" px-5 py-4">
              <Text className="font-[Poppins-Regular] text-[#8C8C8C] text-base">
                Moje zamówienia
              </Text>
            </TouchableOpacity>
          </View>

          <View className="border-t border-[#F5F5F5] border-b">
            <TouchableOpacity className=" px-5 py-4">
              <Text className="font-[Poppins-Regular] text-[#8C8C8C] text-base">
                Zmień hasło
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View className="bg-white pb-16  items-center">
        <TouchableOpacity>
          <Text className="font-[Poppins-Bold] text-[#F15E3B] text-base uppercase">
            Wyloguj się
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
