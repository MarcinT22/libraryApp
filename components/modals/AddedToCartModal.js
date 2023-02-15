import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BookCard from "../books/BookCard";
import { useNavigation } from "@react-navigation/native";
const AddedToCartModal = ({ data, visible, setVisibleModal }) => {
  const navigation = useNavigation();

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setVisibleModal(false)}
    >
      {visible && <StatusBar backgroundColor="rgba(0,0,0,0.9)" />}

      <View className="flex-1 justify-end">
        <View className="p-5 pb-3 bg-white rounded-t-[15px]">
          <View className="flex-row justify-between items-center">
            <Text className="font-[Poppins-Bold] text-lg text-black">
              Dodano do koszyka!
            </Text>
            <TouchableOpacity onPress={() => setVisibleModal(false)}>
              <MaterialCommunityIcons name="close" color="#8C8C8C" size={30} />
            </TouchableOpacity>
          </View>
          <View className="py-3">
            <View className="flex-row flex-wrap ">
              <View className="w-1/3 ">
                <Image
                  className="w-full h-24 rounded-xl"
                  source={{
                    uri: data.imgUrl,
                  }}
                  resizeMode="cover"
                />
              </View>
              <View className="w-2/3 px-4">
                <Text className="text-xs color-black font-[Poppins-Regular]">
                  {data.category}
                </Text>
                <Text className="text-base font-[Poppins-SemiBold] leading-4 pt-1 color-black">
                  {data.title}
                </Text>
                <Text className="text-sm color-[#8C8C8C] font-[Poppins-Regular] leading-4 pt-1">
                  {data.author}
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row items-center justify-between pt-2">
            <View className="w-2/5">
              <TouchableOpacity
                onPress={() => setVisibleModal(false)}
                className=" p-2 rounded-[10px] bg-[#8C8C8C] relative"
              >
                <View className="absolute left-2 top-0 bottom-0 justify-center">
                  <MaterialCommunityIcons
                    name="arrow-left"
                    color="#fff"
                    size={22}
                  />
                </View>
                <Text className="font-[Poppins-Bold] text-sm color-white uppercase ml-7">
                  Powrót
                </Text>
              </TouchableOpacity>
            </View>
            <View className="w-3/5 pl-3">
              <TouchableOpacity
                onPress={() => navigation.navigate("Cart")}
                className="p-2 rounded-[10px] bg-[#F15E3B]"
              >
                <Text className="font-[Poppins-Bold] text-sm color-white text-center uppercase">
                  Przejdź do koszyka
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddedToCartModal;
