import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import AddedToCartModal from "../components/modals/AddedToCartModal";

const BookScreen = () => {
  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState(false);

  const {
    params: { data },
  } = useRoute();

  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(data));
    setVisibleModal(true);
  };

  return (
    <View className="flex-1 bg-[#343434]">
      <AddedToCartModal
        data={data}
        visible={visibleModal}
        setVisibleModal={setVisibleModal}
      />
      <View className="relative z-0 px-5 ">
        <View className="flex-row items-center justify-center">
          <TouchableOpacity
            className="absolute left-0"
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons name="arrow-left" color="#fff" size={30} />
          </TouchableOpacity>
          <Text className="color-white text-lg font-[Poppins-Bold] my-4 text-center">
            Szczegóły książki
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1  bg-white "
        stickyHeaderIndices={[0]}
      >
        <View className="bg-[#343434] h-[140px]"></View>
        <View className="rounded-t-[15px] mt-[-50px] relative z-10 p-5 pb-0 bg-white">
          <View className="flex-row items-center pb-3">
            <View
              className=" mt-[-110px] rounded-[15px] "
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
            >
              <Image
                source={{ uri: data.imgUrl }}
                className="w-40 h-60 rounded-[15px]"
                resizeMode="contain"
              />
            </View>
            <View className="ml-3  w-1/2">
              <Text className="text-[#8C8C8C] text-xs font-[Poppins-Regular] mb-1">
                {data.category}
              </Text>
              <Text className="text-[#8C8C8C] text-xs font-[Poppins-Regular] mb-1">
                Wydawnictwo: Znak
              </Text>
              <Text className="text-[#8C8C8C] text-xs font-[Poppins-Regular] mb-1">
                Data premiery: 23.03.2001
              </Text>
              <Text className="text-[#8C8C8C] text-xs font-[Poppins-Regular] mb-1">
                Liczba stron: 546
              </Text>
            </View>
          </View>
          <Text className="font-[Poppins-SemiBold] text-lg">{data.title}</Text>
          <Text className="font-[Poppins-Regular] text-base text-[#8C8C8C]">
            {data.author}
          </Text>
          <View className="mt-4 ">
            <Text className="font-[Poppins-Regular] text-sm text-black leading-6">
              {data.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className="bg-white px-5 pb-4 pt-4">
        <TouchableOpacity
          onPress={() => addItemToCart()}
          className="py-3 bg-[#F15E3B] rounded-[10px] "
        >
          <Text className="text-center text-white font-[Poppins-Bold] text-xl uppercase ">
            Wypożyczam
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookScreen;
