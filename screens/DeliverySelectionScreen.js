import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectDeliveryPoint, setDeliveryPoint } from "../slices/cartSlice";
import { places } from "../data/places";

const DeliverySelectionScreen = () => {
  const navigation = useNavigation();

  const selectedPoint = useSelector(selectDeliveryPoint);

  const dispatch = useDispatch();

  function selectItem(place) {
    dispatch(setDeliveryPoint(place));
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: selectedPoint.id ? withSpring(0) : withSpring(100),
        },
      ],
    };
  });

  return (
    <View className="flex-1 bg-[#343434]">
      <Header title="Wybierz paczkomat" />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 30 }}
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white rounded-t-[15px] px-5"
      >
        {places.map((place) => {
          return (
            <TouchableOpacity
              className="flex-row mb-7"
              key={place.id}
              onPress={() => selectItem(place)}
            >
              <View className="w-6 h-6 border border-[#F15E3B] bg-white rounded-full mr-2 items-center justify-center">
                <View
                  className={`w-3.5 h-3.5 rounded-full ${
                    selectedPoint.id == place.id ? "bg-[#F15E3B]" : "bg-white"
                  }`}
                ></View>
              </View>
              <View>
                <Text className="font-[Poppins-SemiBold] text-base leading-5">
                  {place.title}
                </Text>
                <Text className="font-[Poppins-Regular] text-xs text-[#8C8C8C] leading-4">
                  {place.description}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          className="mt-3"
          onPress={() => navigation.navigate("MapScreen")}
        >
          <Text className="font-[Poppins-Bold] text-base text-center text-[#F15E3B]">
            Zobacz wszystkie punkty na mapie
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View className="bg-white px-5 pb-4 pt-4">
        <Animated.View style={animatedStyles}>
          <TouchableOpacity
            className="py-3 bg-[#F15E3B] rounded-[10px]"
            onPress={() => navigation.navigate("SummaryScreen")}
          >
            <Text className="text-center text-white font-[Poppins-Bold] text-lg uppercase ">
              Przejdź do podsumowania
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default DeliverySelectionScreen;
