import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RegisterScreen = () => {
  const isFocused = useIsFocused();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassoword] = useState("");

  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white p-5">
      {isFocused && <StatusBar barStyle="dark-content" />}
      <TouchableOpacity className="mt-5" onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" color="#343434" size={30} />
      </TouchableOpacity>
      <View className="flex-1  justify-center items-center">
        <Text className="text-black text-3xl text-center font-[Poppins-Bold] mb-5">
          Zarejestruj się
        </Text>
        <TextInput
          placeholder="E-mail"
          onChangeText={setLogin}
          value={login}
          cursorColor="#B1B1B1"
          inputMode="email"
          className="text-black bg-[#F2F2F2] rounded-[10px] w-full pt-3 pb-2 px-4 font-[Poppins-Regular] text-sm"
          placeholderTextColor="#b1b1b1"
          selectionColor="#F15E3B"
          color
        />

        <TextInput
          placeholder="Hasło"
          onChangeText={setPassword}
          value={password}
          cursorColor="#B1B1B1"
          inputMode="email"
          className="text-black bg-[#F2F2F2] rounded-[10px] w-full pt-3 pb-2 px-4 font-[Poppins-Regular] text-sm pr-12 mt-6"
          placeholderTextColor="#b1b1b1"
          selectionColor="#F15E3B"
        />
        <TextInput
          placeholder="Powtórz hasło"
          onChangeText={setConfirmPassoword}
          value={confirmPassword}
          cursorColor="#B1B1B1"
          inputMode="email"
          className="text-black bg-[#F2F2F2] rounded-[10px] w-full pt-3 pb-2 px-4 font-[Poppins-Regular] text-sm pr-12 my-6"
          placeholderTextColor="#b1b1b1"
          selectionColor="#F15E3B"
        />

        <TouchableOpacity
          onPress=""
          className="py-3 bg-[#F15E3B] rounded-[10px] w-full "
        >
          <Text className="text-center text-white font-[Poppins-Bold] text-lg uppercase">
            Załóż konto
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
