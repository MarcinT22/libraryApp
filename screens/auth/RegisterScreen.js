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

  const [isPasswordSecured, setIsPasswordSecured] = useState(true);
  const [isConfirmSecured, setIsConfirmSecured] = useState(true);

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
        <View className="w-full mb-6 relative">
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
        </View>
        <View className="w-full mb-6 relative">
          <TextInput
            secureTextEntry={isPasswordSecured}
            placeholder="Hasło"
            onChangeText={setPassword}
            value={password}
            cursorColor="#B1B1B1"
            inputMode="email"
            className="text-black bg-[#F2F2F2] rounded-[10px] w-full pt-3 pb-2 px-4 font-[Poppins-Regular] text-sm pr-12"
            placeholderTextColor="#b1b1b1"
            selectionColor="#F15E3B"
          />
          <TouchableOpacity
            className="absolute right-3 top-0 bottom-0 items-center justify-center"
            onPress={() => setIsPasswordSecured(!isPasswordSecured)}
          >
            <MaterialCommunityIcons
              name={isPasswordSecured ? "eye" : "eye-off"}
              color="#6F6F6F"
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View className="w-full mb-6 relative">
          <TextInput
            secureTextEntry={isConfirmSecured}
            placeholder="Powtórz hasło"
            onChangeText={setConfirmPassoword}
            value={confirmPassword}
            cursorColor="#B1B1B1"
            inputMode="email"
            className="text-black bg-[#F2F2F2] rounded-[10px] w-full pt-3 pb-2 px-4 font-[Poppins-Regular] text-sm pr-12"
            placeholderTextColor="#b1b1b1"
            selectionColor="#F15E3B"
          />
          <TouchableOpacity
            className="absolute right-3 top-0 bottom-0 items-center justify-center"
            onPress={() => setIsConfirmSecured(!isConfirmSecured)}
          >
            <MaterialCommunityIcons
              name={isConfirmSecured ? "eye" : "eye-off"}
              color="#6F6F6F"
              size={20}
            />
          </TouchableOpacity>
        </View>

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
