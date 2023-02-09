import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const BookListByCategory = ({ navigation }) => {
  const {
    params: { data },
  } = useRoute();

  return (
    <View className="flex-1 bg-[#fff]">
      <View className="relative z-0 px-5 bg-[#343434] pb-5">
        <View className="flex-row items-center justify-center">
          <TouchableOpacity
            className="absolute left-0"
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" color="#fff" size={30} />
          </TouchableOpacity>
          <Text className="color-white text-lg font-[Poppins-Bold] my-4 text-center">
            {data.title} ss
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1  rounded-[15px] mt-[-15px]"
      >
        <View className="flex-1  bg-white  rounded-t-[15px]  relative z-10 p-5 pb-0 ">
          <View className="bg-[#eaeaea]  rounded-[15px] flex-row items-center justify-center  h-12 mb-3">
            <MaterialIcons name="search" size={28} color="#8C8C8C" />
            <TextInput
              placeholder="Wyszukaj książkę"
              selectionColor="#F15E3B"
              cursorColor="#F15E3B"
              placeholderTextColor="#8C8C8C"
              className="text-sm font-[Poppins-Regular] pt-1 pl-4  mr-2 w-4/5 "
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CategoriesScreen", { data })}
          >
            <Text
              className="text-sm uppercase font-[Poppins-Bold] 
             text-[#F15E3B]"
            >
              Kategorie
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookListByCategory;
