import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const AuthUserScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  return (
    <View className="flex-1 bg-white justify-center items-center p-5">
      {isFocused && <StatusBar barStyle="dark-content" />}

      <Text className="text-black text-3xl text-center font-[Poppins-Bold] mb-5">
        Moje konto
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
        className="py-3 bg-[#F15E3B] rounded-[10px] w-full "
      >
        <Text className="text-center text-white font-[Poppins-Bold] text-lg uppercase">
          Zaloguj
        </Text>
      </TouchableOpacity>
      <Text className="mt-8 font-[Poppins-Regular] text-lg text-center">
        Nie masz konta?
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("RegisterScreen")}
        className="py-3 bg-white border border-[#F15E3B] rounded-[10px] w-full mt-2 "
      >
        <Text className="text-center text-[#F15E3B] font-[Poppins-Bold] text-lg uppercase ">
          Zarejestruj się
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthUserScreen;
