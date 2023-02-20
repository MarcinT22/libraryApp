import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { selectCartItems, selectDeliveryPoint } from "../slices/cartSlice";
import { useNavigation } from "@react-navigation/native";

const SummaryScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectCartItems);
  const deliveryPoint = useSelector(selectDeliveryPoint);

  return (
    <View className="flex-1 bg-[#343434] ">
      <Header title="Podsumowanie" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white rounded-t-[15px]"
      >
        <View className="p-5">
          <Text className="font-[Poppins-Bold] text-lg text-black">
            Wybrane książki:
          </Text>

          {items.map((data) => (
            <View className="border-b border-[#ECECEC] py-3" key={data.id}>
              <View className="flex-row items-center">
                <View className="w-1/5">
                  <Image
                    className="w-16 h-20 rounded-[5px]"
                    source={{
                      uri: data.imgUrl,
                    }}
                  />
                </View>
                <View className="w-4/5 ml-3 ">
                  <View className="pr-16">
                    <Text
                      numberOfLines={2}
                      className="font-[Poppins-SemiBold]   text-sm text-black leading-4 pt-1"
                    >
                      {data.title}
                    </Text>
                    <Text
                      numberOfLines={1}
                      className="text-xs font-[Poppins-Regular] text-[#8C8C8C]"
                    >
                      {data.author}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}

          <Text className="font-[Poppins-Bold] text-lg text-black mt-5">
            Punkt odbioru:
          </Text>
          <View className="flex-row items-center pt-2 pb-7">
            <View className="w-1/5 ">
              <Image
                source={require("../assets/marker-active.png")}
                resizeMode="contain"
                className="w-12 h-16"
              />
            </View>
            <View className="w-4/5">
              <Text className="font-[Poppins-SemiBold] text-base">
                {deliveryPoint.title}
              </Text>

              <Text className="font-[Poppins-Regular] text-xs text-[#8C8C8C]">
                {deliveryPoint.description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="bg-white px-5 pb-4 pt-4">
        <TouchableOpacity
          className="py-3 bg-[#F15E3B] rounded-[10px]"
          onPress={() => navigation.navigate("ThankScreen")}
        >
          <Text className="text-center text-white font-[Poppins-Bold] text-lg uppercase ">
            Wypożyczam
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SummaryScreen;
