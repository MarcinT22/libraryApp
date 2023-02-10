import { TouchableOpacity, Text } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const SearchButton = ({ dark }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className={`flex-row items-center ${
        dark ? "bg-[#292929]" : "bg-[#EAEAEA]"
      } h-12 rounded-[15px] px-4`}
      onPress={() => navigation.navigate("Search")}
    >
      <MaterialIcons
        name="search"
        size={28}
        color={dark ? "#fff" : "#8C8C8C"}
      />
      <Text
        className={`text-sm font-[Poppins-Regular] ml-4 ${
          dark ? "text-white" : "text-[#8C8C8C]"
        }`}
      >
        Wyszukaj książkę
      </Text>
    </TouchableOpacity>
  );
};

export default SearchButton;
