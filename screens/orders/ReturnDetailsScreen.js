import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import QRCode from "react-native-qrcode-svg";
import QRCodeModal from "../../components/modals/QRCodeModal";
import OrderedBookCard from "../../components/books/OrderedBookCard";
import { books } from "../../data/books";
import { useNavigation } from "@react-navigation/native";

const ReturnDetailsScreen = ({ route }) => {
  const navigation = useNavigation();

  const [status, setStatus] = useState(true);
  const [zoomQR, setZoomQr] = useState(false);

  const [valueQR, setValueQR] = useState("349761");

  const [isGoBack, setIsGoBack] = useState(
    route.params ? route.params.goBack : true
  );

  useEffect(() => {
    function handleBackButton() {
      navigation.navigate("OrdersToBeReturnedScreen");
      return true;
    }

    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
  }, [navigation]);

  const BookList = () => (
    <>
      <Text className="font-[Poppins-Bold] text-xs uppercase text-[#8C8C8C] mt-5">
        Książki do zwrotu:
      </Text>

      {books.slice(0, 2).map((book) => {
        return (
          <View className="border-b border-[#ECECEC] py-3" key={book.id}>
            <OrderedBookCard data={book} />
          </View>
        );
      })}
    </>
  );

  const DeliveryPoint = () => (
    <>
      <Text className="font-[Poppins-Bold] text-xs uppercase text-[#8C8C8C] mt-5">
        Punkt zwrotu:
      </Text>
      <View className="flex-row items-center pt-2 pb-7">
        <View className="w-12 ">
          <Image
            source={require("../../assets/marker-active.png")}
            resizeMode="contain"
            className="w-12 h-16"
          />
        </View>
        <View className="w-4/5 ml-3">
          <Text className="font-[Poppins-SemiBold] text-base">
            BM Skoczów - PO1
          </Text>

          <Text className="font-[Poppins-Regular] text-xs text-[#8C8C8C]">
            Skoczów, ul. Wałowa 3
          </Text>
        </View>
      </View>
    </>
  );

  return (
    <View className="flex-1 bg-[#343434] ">
      <Header title="Szczegóły zwrotu" goBack={isGoBack} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white rounded-t-[15px]"
      >
        <View className="p-5">
          <View className="flex-row items-center justify-between mt-2">
            <View className="w-1/2">
              <Text className="text-[#8C8C8C] font-[Poppins-Bold] text-base uppercase">
                Kod zwrotu:
              </Text>
              <Text className="text-black font-[Poppins-Bold] text-4xl mt-1">
                {valueQR}
              </Text>
              <Text className="text-black font-[Poppins-Bold] text-xs mt-2">
                Oddaj książki do dnia:
              </Text>
              <Text className="text-black font-[Poppins-Bold] text-base">
                21.02.2023
              </Text>
            </View>
            <View className="w-1/2 items-end">
              <TouchableOpacity onPress={() => setZoomQr(true)}>
                <QRCode value={valueQR} size={144} />
                <Text className="font-[Poppins-SemiBold] text-xs mt-1">
                  Dotknij, aby powiększyć
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <DeliveryPoint />
          <BookList />
        </View>
      </ScrollView>
      <QRCodeModal
        isVisible={zoomQR}
        setIsVisible={setZoomQr}
        value={valueQR}
      />
    </View>
  );
};

export default ReturnDetailsScreen;
