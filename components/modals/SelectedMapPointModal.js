import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { setDeliveryPoint } from "../../slices/cartSlice";
import { useNavigation } from "@react-navigation/native";

const SelectedMapPointModal = ({ data }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  function selectPoint() {
    dispatch(setDeliveryPoint(data));
    navigation.goBack();
  }

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: data.id ? withTiming(0) : withTiming(300),
        },
      ],
    };
  });

  return (
    <Animated.View
      className="bg-white rounded-t-[15px] absolute left-0 right-0 bottom-0 p-5"
      style={animatedStyles}
    >
      <View className="flex-row items-center pt-2 pb-7">
        <View className="w-1/5">
          <Image
            source={require("../../assets/marker-active.png")}
            resizeMode="contain"
            className="w-12 h-12"
          />
        </View>
        <View className="w-4/5">
          <Text className="font-[Poppins-SemiBold] text-base">
            {data.title}
          </Text>

          <Text className="font-[Poppins-Regular] text-xs text-[#8C8C8C]">
            {data.description}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          selectPoint();
        }}
        className="py-3 bg-[#F15E3B] rounded-[10px] "
      >
        <Text className="text-center text-white font-[Poppins-Bold] text-lg uppercase ">
          Wybieram ten punkt
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SelectedMapPointModal;
