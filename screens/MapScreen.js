import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import SelectedMapPointModal from "../components/modals/SelectedMapPointModal";
import { useRoute } from "@react-navigation/native";

const MapScreen = () => {
  const {
    params: { data },
  } = useRoute();

  const [selectedPoint, setSelectedPoint] = useState(data);

  const [markers, setMarkers] = useState([
    {
      id: 1,
      latitude: 49.8013615,
      longitude: 18.7846833,
      title: "BM Skoczów - P01",
      description: "Skoczów, ul. Wałowa 3",
    },
    {
      id: 2,
      latitude: 49.8016531,
      longitude: 18.7882967,
      title: "BM Skoczów - P02",
      description: "Skoczów, Gleria Pledan, ul. Fabryczna 9",
    },
    {
      id: 3,
      latitude: 49.8004059,
      longitude: 18.7955619,
      title: "BM Skoczów - P03",
      description: "Skoczów, SP3, ul. Osiedlowa 1",
    },
  ]);

  return (
    <View className="flex-1 ">
      <Header title="Wybierz punkt na mapie" />
      <View className="rounded-t-[15px] overflow-hidden">
        <MapView
          className="w-full h-full"
          initialRegion={{
            latitude: 49.8013615,
            longitude: 18.7846833,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          toolbarEnabled={false}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              onPress={() => {
                setSelectedPoint(marker);
              }}
            >
              <Image
                source={
                  selectedPoint.id == marker.id
                    ? require("../assets/marker-active.png")
                    : require("../assets/marker.png")
                }
                resizeMode="contain"
                className="w-14 h-14"
              />
            </Marker>
          ))}
        </MapView>
      </View>
      <SelectedMapPointModal data={selectedPoint} />
    </View>
  );
};

export default MapScreen;
