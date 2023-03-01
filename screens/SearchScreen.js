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
    if (searchText.trim().length == 0) {
      return false;
    }
    try {
      if (!searchStorage.includes(searchText)) {
        searchStorage.push(searchText);
      }

      const output = JSON.stringify(searchStorage.reverse());
      await AsyncStorage.setItem("searchStorage", output);

      navigation.navigate("SearchNavigation", {
        screen: "SearchResults",
        initial: false,
        params: { textSearched: searchText },
      });
    } catch (e) {
      console.warn(e);
    }
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
    const focusHandler = navigation.addListener("focus", () => {
      setSearchText("");
      getSearchList();
      setTimeout(() => {
        refInput.current.focus();
      }, 100);
    });
    return focusHandler;
  }, [navigation]);

  return (
    <View className="flex-1 bg-white pt-5">
      {isFocused && <StatusBar barStyle="dark-content" />}
      <View className="flex-row items-center justify-between py-3 pl-4 pr-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" color="#000" size={30} />
        </TouchableOpacity>
        <View className="bg-[#343434]  rounded-[30px] flex-row items-center justify-center  h-12 ml-2">
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
            className="text-sm font-[Poppins-Regular] pt-1 pl-2 pr-4 text-white mr-2 w-4/5 "
          />
          <TouchableOpacity onPress={() => search()}>
            <MaterialIcons name="search" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {searchStorage.length > 0 ? (
        <View className="mb-3  px-5">
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
                    <TouchableOpacity
                      className="flex-row items-center py-1.5"
                      onPress={() =>
                        navigation.navigate("SearchNavigation", {
                          screen: "SearchResults",
                          initial: false,
                          params: { textSearched: item },
                        })
                      }
                    >
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
        <Text className="py-2 px-5 text-[#8C8C8C]">
          Brak ostatnich wyszukiwań
        </Text>
      )}
    </View>
  );
};

export default SearchScreen;
