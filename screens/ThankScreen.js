import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function ThankScreen({ books }) {
  const navigation = useNavigation();
  const animation = useRef();

  useEffect(() => {
    setTimeout(() => {
      animation.current?.pause();
    }, 2100);

    function handleBackButton() {
      navigation.navigate("HomeScreen");
      return true;
    }

    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  }, [navigation]);

  return (
    <>
      <View className="flex-1 justify-center items-center bg-white p-4">
        <Lottie
          ref={animation}
          source={require("../assets/lottie/76649-checked.json")}
          autoPlay
          className="w-48"
        />
        <Text className="font-[Poppins-Bold] text-base text-center mt-[-15px]">
          Dziękujemy za złożenie zamówienia!
        </Text>
        <Text className="text-base text-center font-[Poppins-Regular] mt-4">
          Gdy zamówienie będzie gotowe, otrzymasz wiadomość z kodem odbioru.
        </Text>
        <Text className="text-base text-center font-[Poppins-Regular] mt-4">
          Status zamówienia możesz sprawdzić w szczegółach zamówienia.
        </Text>
      </View>
      <View className="bg-white px-5 pb-4 pt-4">
        <TouchableOpacity
          className="py-3 bg-[#F15E3B] rounded-[10px]"
          onPress={() =>
            navigation.navigate("OrderDetailsScreen", {
              goBack: false,
            })
          }
        >
          <Text className="text-center text-white font-[Poppins-Bold] text-lg uppercase ">
            Szczegóły zamówienia
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="py-3  border border-[#F15E3B] rounded-[10px] mt-5"
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text className="text-center text-[#F15E3B] font-[Poppins-Bold] text-lg uppercase ">
            OK
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
