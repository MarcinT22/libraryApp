import { View, Text, Image } from "react-native";
import React from "react";

const OrderedBookCard = ({ data, status, deliveryDate, returnedDate }) => {
  return (
    <View className="flex-row items-center">
      <View className="w-1/5">
        <Image
          className="w-16 h-20 rounded-[5px]"
          source={{
            uri: data.imgUrl,
          }}
        />
      </View>
      <View className="w-4/5 ml-3 ">
        <View
          className={`pr-16 flex-1  ${
            status || deliveryDate || returnedDate
              ? "justify-between"
              : "justify-start"
          }`}
        >
          <View
            className={`${
              !status && !deliveryDate && !returnedDate ? "mt-2" : "mt-0"
            }`}
          >
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
          {status && (
            <Text className="uppercase text-[#8C8C8C] text-xs font-[Poppins-Bold]">
              Status:
              <Text
                className={`text-black ${
                  status == 1 ? "text-[#F15E3B]" : "text-black"
                }`}
              >
                {status == 1 ? " Gotowa do odbioru" : " W trakcie realizacji"}
              </Text>
            </Text>
          )}
          {deliveryDate && (
            <Text className=" text-[#8C8C8C] text-xs font-[Poppins-Bold]">
              Należy oddać do:{" "}
              <Text className="text-black text-sm text-[#F15E3B]">
                {deliveryDate}
              </Text>
            </Text>
          )}
          {returnedDate && (
            <Text className=" text-[#8C8C8C] text-xs font-[Poppins-Regular]">
              Zwrócono: {returnedDate}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default OrderedBookCard;
