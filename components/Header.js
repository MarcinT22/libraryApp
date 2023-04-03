import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { STATUSBAR_PADDING } from "../constants";

const Header = ({ title, goBack }) => {
  const navigation = useNavigation();
  const back = goBack ?? true;
  return (
    <View className="relative  px-4 bg-[#343434]  pb-1">
      <View className="flex-row items-center justify-center">
        {back && (
          <TouchableOpacity
            className="absolute left-0"
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" color="#fff" size={30} />
          </TouchableOpacity>
        )}
        <Text className="text-white text-lg font-[Poppins-Bold] my-4 text-center">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
