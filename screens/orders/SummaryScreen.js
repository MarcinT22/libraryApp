import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../slices/cartSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import OrderedBookCard from "../../components/books/OrderedBookCard";
import { selectDeliveryPoint } from "../../slices/deliverySlice";

import * as Notifications from "expo-notifications";

const SummaryScreen = ({ route }) => {
  const navigation = useNavigation();
  const items = useSelector(selectCartItems);
  const deliveryPoint = useSelector(selectDeliveryPoint);

  const [isReturned, setIsReturned] = useState(route.params ? true : false);
  const [books, setBooks] = useState(
    route.params ? route.params.returnedBooks : items
  );

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Dziękujemy za złożenie zamówienia!",
        body: "Wkrótce Twoje zamówienie wyruszy w drogę do paczkomatu!",
      },
      trigger: null,
      expires: 5000,
      ios: {
        lockScreenVisibility: "visible",
      },
      android: {
        // icon: "../../assets/ic_notification.png",
        // color: "#F15E3B",
      },
    });
  };

  const showThanksScreen = () => {
    sendNotification();
    navigation.navigate("ThankScreen");
  };

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      () => {
        navigation.navigate("OrderDetailsScreen", { goBack: false });
      }
    );
    return () => subscription.remove();
  }, []);

  return (
    <View className="flex-1 bg-[#343434] ">
      <Header title="Podsumowanie" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white rounded-t-[15px]"
      >
        <View className="p-5">
          <Text className="font-[Poppins-Bold] text-lg text-black">
            {isReturned ? "Książki do zwrotu:" : "Wybrane książki:"}
          </Text>

          {books.map((data) => (
            <View className="border-b border-[#ECECEC] py-3" key={data.id}>
              <OrderedBookCard data={data} />
            </View>
          ))}

          <Text className="font-[Poppins-Bold] text-lg text-black mt-5">
            {isReturned ? "Punkt zwrotu:" : "Punkt odbioru:"}
          </Text>
          {deliveryPoint.length != 0 ? (
            <View className="flex-row items-center pt-2 pb-7">
              <View className="w-1/5 ">
                <Image
                  source={require("../../assets/marker-active.png")}
                  resizeMode="contain"
                  className="w-12 h-16"
                />
              </View>
              <View className="w-4/5">
                <Text className="font-[Poppins-SemiBold] text-base">
                  {deliveryPoint.title}
                </Text>

                <Text className="font-[Poppins-Regular] text-xs text-[#8C8C8C]">
                  {deliveryPoint.description}
                </Text>
                <TouchableOpacity
                  className="mt-1"
                  onPress={() => navigation.navigate("DeliverySelectionScreen")}
                >
                  <Text className="uppercase text font-[Poppins-Bold] text-[#F15E3B]">
                    Zmień
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                className="py-3 border border-[#F15E3B] rounded-[10px] mt-2"
                onPress={() => navigation.navigate("DeliverySelectionScreen")}
              >
                <Text className="text-center text-[#F15E3B] font-[Poppins-Bold] text-base uppercase ">
                  Wybierz punkt
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
      <View className="bg-white px-5 pb-4 pt-4">
        <TouchableOpacity
          className="py-3 bg-[#F15E3B] rounded-[10px]"
          onPress={() =>
            isReturned
              ? navigation.navigate("ReturnDetailsScreen", { goBack: false })
              : showThanksScreen()
          }
        >
          <Text className="text-center text-white font-[Poppins-Bold] text-lg uppercase ">
            {isReturned ? "Generuj kod zwrotu" : "Wypożyczam"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SummaryScreen;
