import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useEffect, useRef, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SearchScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [searchText, setSearchText] = useState("");
  const [searchStorage, setSearchStorage] = useState([]);

  const refInput = useRef();

  const search = async () => {
    try {
      searchStorage.push(searchText);
      const output = JSON.stringify(searchStorage);

      await AsyncStorage.setItem("searchStorage", output);
    } catch (e) {
      console.warn(e);
    }

    setSearchText("");
  };

  const getSearchList = async () => {
    try {
      const data = await AsyncStorage.getItem("searchStorage");
      const output = JSON.parse(data);

      setSearchStorage(output ?? []);
    } catch (e) {
      console.warn(e);
    }
  };

  const clear = async () => {
    setSearchStorage([]);
    const output = JSON.stringify([]);
    try {
      await AsyncStorage.setItem("searchStorage", output);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSearchList();
    setTimeout(() => {
      refInput.current.focus();
    }, 100);
  }, []);

  return (
    <View className="flex-1 bg-white p-5">
      {isFocused && (
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      )}
      <View className="bg-[#343434]  rounded-[15px] flex-row items-center justify-center  h-12 mb-3">
        <MaterialIcons name="search" size={28} color="#fff" />
        <TextInput
          onSubmitEditing={() => search()}
          returnKeyType="search"
          autoCapitalize="none"
          ref={refInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Wyszukaj książkę"
          selectionColor="#F15E3B"
          cursorColor="#F15E3B"
          placeholderTextColor="#fff"
          className="text-sm font-[Poppins-Regular] pt-1 pl-4 text-white mr-2 w-4/5 "
        />
      </View>

      {searchStorage.length > 0 ? (
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View className="flex-row justify-between py-1">
              <Text className="font-[Poppins-Bold] text-xs uppercase text-black">
                Ostatnie wyszukiwania
              </Text>
              <TouchableOpacity onPress={() => clear()}>
                <Text className="font-[Poppins-Bold] text-xs uppercase text-[#F15E3B]">
                  Wyczyść
                </Text>
              </TouchableOpacity>
            </View>
            <View className=" mt-2 pb-28">
              {searchStorage.map((item, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity className="flex-row items-center py-1.5">
                      <MaterialCommunityIcons
                        name="clock-time-seven-outline"
                        color="#8C8C8C"
                        size={26}
                      />
                      <Text className="text-[#8C8C8C] font-[Poppins-Regular] ml-2 pt-1">
                        {item}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      ) : (
        <Text className="py-2 text-[#8C8C8C]">Brak ostatnich wyszukiwań</Text>
      )}
    </View>
  );
};

export default SearchScreen;
