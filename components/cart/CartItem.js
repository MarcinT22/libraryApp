import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../slices/cartSlice";
import Animated, { Layout } from "react-native-reanimated";

const CartItem = ({ data, remove }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromCart(data));
    remove();
  };

  return (
    <Animated.View layout={Layout} className="border-b border-[#ECECEC] py-3">
      <TouchableOpacity
        onPress={() => navigation.navigate("BookScreen", { data })}
        className="flex-row items-center"
      >
        <View className="w-1/5">
          <Image
            className="w-16 h-20 rounded-[5px]"
            source={{
              uri: data.imgUrl,
            }}
          />
        </View>
        <View className="w-4/5 ml-3 ">
          <View className="pr-16">
            <Text
              numberOfLines={2}
              className="font-[Poppins-SemiBold]   text-sm text-black leading-4 pt-1"
            >
              {data.title}
            </Text>
            <Text
              numberOfLines={1}
              className="text-xs font-[Poppins-Regular] text-[#8C8C8C]"
            >
              {data.author}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        className="items-center absolute right-0 bottom-0 top-0 justify-center"
        onPress={() => removeItem()}
      >
        <FontAwesome name="trash" color="#DC5656" size={20} />
        <Text className="text-xs text-[#DC5656]">Usuń</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CartItem;
