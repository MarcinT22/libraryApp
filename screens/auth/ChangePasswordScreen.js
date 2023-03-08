import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassoword] = useState("");

  const [isOldPasswordSecured, setIsOldPasswordSecured] = useState(true);
  const [isPasswordSecured, setIsPasswordSecured] = useState(true);
  const [isConfirmSecured, setIsConfirmSecured] = useState(true);

  return (
    <View className="flex-1 bg-[#343434]">
      <Header title="Zmień hasło" />
      <View className="flex-1  justify-center items-center p-5 bg-white rounded-t-[15px]">
        <Text className="text-black text-lg text-center font-[Poppins-Bold] mb-5">
          Ustaw nowe hasło
        </Text>
        <View className="w-full mb-6 relative">
          <TextInput
            secureTextEntry={isOldPasswordSecured}
            placeholder="Stare hasło"
            onChangeText={setOldPassword}
            value={oldPassword}
            cursorColor="#B1B1B1"
            inputMode="email"
            className="text-black bg-[#F2F2F2] rounded-[10px] w-full pt-3 pb-2 px-4 font-[Poppins-Regular] text-sm pr-12"
            placeholderTextColor="#b1b1b1"
            selectionColor="#F15E3B"
          />
          <TouchableOpacity
            className="absolute right-3 top-0 bottom-0 items-center justify-center"
            onPress={() => setIsOldPasswordSecured(!isOldPasswordSecured)}
          >
            <MaterialCommunityIcons
              name={isOldPasswordSecured ? "eye" : "eye-off"}
              color="#6F6F6F"
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View className="w-full mb-6 relative">
          <TextInput
            secureTextEntry={isPasswordSecured}
            placeholder="Nowe hasło"
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
            placeholder="Powtórz nowe hasło"
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
            Zmień hasło
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
