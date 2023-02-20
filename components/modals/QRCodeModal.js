import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import QRCode from "react-native-qrcode-svg";
const QRCodeModal = ({ isVisible, setIsVisible, value }) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View className="flex-1 bg-white rounded-t-[15px] p-4">
        <TouchableOpacity onPress={() => setIsVisible(false)}>
          <MaterialCommunityIcons name="arrow-left" color="#343434" size={30} />
        </TouchableOpacity>
        <View className="flex-1 items-center justify-center">
          <Text className="uppercase text-black text-lg text-center font-[Poppins-Bold] mb-6">
            Zeskanuj kod
          </Text>
          <QRCode value={value} size={240} />
        </View>
      </View>
      <View className="bg-white px-5 pb-4 pt-4">
        <TouchableOpacity
          onPress={() => setIsVisible(false)}
          className="py-3 bg-[#F15E3B] rounded-[10px] "
        >
          <Text className="text-center text-white font-[Poppins-Bold] text-lg uppercase ">
            Zamknij
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default QRCodeModal;
