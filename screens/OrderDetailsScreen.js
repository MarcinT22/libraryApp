import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import QRCode from "react-native-qrcode-svg";
import QRCodeModal from "../components/modals/QRCodeModal";

const OrderDetailsScreen = () => {
  const [status, setStatus] = useState(true);
  const [zoomQR, setZoomQr] = useState(false);

  const [valueQR, setValueQR] = useState("43234");

  const BookList = () => (
    <>
      <Text className="font-[Poppins-Bold] text-xs uppercase text-[#8C8C8C] mt-5">
        Zamówione książki:
      </Text>
      <View className="border-b border-[#ECECEC] py-3">
        <View className="flex-row items-center">
          <View className="w-1/5">
            <Image
              className="w-16 h-20 rounded-[5px]"
              source={{
                uri: "https://ecsmedia.pl/c/jak-mniej-myslec-dla-analizujacych-bez-konca-i-wysoko-wrazliwych-w-iext121406099.jpg",
              }}
            />
          </View>
          <View className="w-4/5 ml-3 ">
            <View className="pr-16">
              <Text
                numberOfLines={2}
                className="font-[Poppins-SemiBold] text-sm text-black leading-4 pt-1"
              >
                Jak mniej myśleć. Dla analizujących bez końca i wysoko
                wrażliwych
              </Text>
              <Text
                numberOfLines={1}
                className="text-xs font-[Poppins-Regular] text-[#8C8C8C]"
              >
                Petitcollin Christel
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="border-b border-[#ECECEC] py-3">
        <View className="flex-row items-center">
          <View className="w-1/5">
            <Image
              className="w-16 h-20 rounded-[5px]"
              source={{
                uri: "https://ecsmedia.pl/c/mozg-bez-ograniczen-potwierdzone-naukowo-metody-dzieki-ktorym-nauczysz-sie-szybkiego-czytania-usprawnisz-pamiec-zwiekszysz-koncentracje-i-aktywujesz-supermoce-swojego-mozgu-w-iext115614787.jpg",
              }}
            />
          </View>
          <View className="w-4/5 ml-3 ">
            <View className="pr-16">
              <Text
                numberOfLines={2}
                className="font-[Poppins-SemiBold] text-sm text-black leading-4 pt-1"
              >
                Mózg bez ograniczeń. Potwierdzone naukowo metody, dzięki którym
                nauczysz się szybkiego czytania, usprawnisz pamięć, zwiększysz
                koncentrację i… aktywujesz supermoce swojego mózgu
              </Text>
              <Text
                numberOfLines={1}
                className="text-xs font-[Poppins-Regular] text-[#8C8C8C]"
              >
                Kwik Jim
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );

  const DeliveryPoint = () => (
    <>
      <Text className="font-[Poppins-Bold] text-xs uppercase text-[#8C8C8C] mt-5">
        Punkt odbioru:
      </Text>
      <View className="flex-row items-center pt-2 pb-7">
        <View className="w-1/5 ">
          <Image
            source={require("../assets/marker-active.png")}
            resizeMode="contain"
            className="w-12 h-16"
          />
        </View>
        <View className="w-4/5">
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
      <Header title="Szczegóły zamówienia" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white rounded-t-[15px]"
      >
        <View className="p-5">
          <Text className="font-[Poppins-Bold] text-xs uppercase text-[#8C8C8C]">
            Status:
          </Text>
          <Text
            className={`font-[Poppins-Bold] text-lg ${
              status ? "text-[#F15E3B]" : "text-black"
            }`}
          >
            {status ? "Gotowe do odbioru" : "W trakcie realizacji"}
          </Text>

          {status ? (
            <>
              <View className="flex-row items-center justify-between mt-2">
                <View className="w-1/2">
                  <Text className="text-[#8C8C8C] font-[Poppins-Bold] text-base uppercase">
                    Kod odbioru:
                  </Text>
                  <Text className="text-black font-[Poppins-Bold] text-4xl mt-1">
                    548956
                  </Text>
                  <Text className="text-black font-[Poppins-Bold] text-xs mt-2">
                    Odbierz zamówienie do:
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
            </>
          ) : (
            <>
              <BookList />
              <DeliveryPoint />
            </>
          )}
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

export default OrderDetailsScreen;
