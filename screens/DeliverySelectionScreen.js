import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const places = [
  {
    id: 1,
    name: "BM Skoczów - P01",
    address: "Skoczów, ul. Wałowa 3",
  },
  {
    id: 2,
    name: "BM Skoczów - P02",
    address: "Skoczów, Gleria Pledan, ul. Fabryczna 9",
  },
  {
    id: 3,
    name: "BM Skoczów - P03",
    address: "Skoczów, SP3, ul. Osiedlowa 1",
  },
];

const DeliverySelectionScreen = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: selectedItem ? withSpring(0) : withSpring(100),
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
              onPress={() => setSelectedItem(place.id)}
            >
              <View
                className={`w-5 h-5 border border-[#F15E3B] rounded-full mr-2 ${
                  selectedItem == place.id ? "bg-[#F15E3B]" : "bg-white"
                }`}
              ></View>
              <View>
                <Text className="font-[Poppins-SemiBold] text-base leading-5">
                  {place.name}
                </Text>
                <Text className="font-[Poppins-Regular] text-xs text-[#8C8C8C] leading-4">
                  {place.address}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity className="mt-3">
          <Text className="font-[Poppins-Bold] text-base text-center text-[#F15E3B]">
            Zobacz wszystkie punkty na mapie
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View className="bg-white px-5 pb-4 pt-4">
        <Animated.View style={animatedStyles}>
          <TouchableOpacity className="py-3 bg-[#F15E3B] rounded-[10px] ">
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
