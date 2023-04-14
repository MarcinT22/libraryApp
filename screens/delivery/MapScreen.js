import { View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import SelectedMapPointModal from "../../components/modals/SelectedMapPointModal";

import { places } from "../../data/places";
import { useSelector } from "react-redux";
import { selectDeliveryPoint } from "../../slices/deliverySlice";
import * as Location from "expo-location";
import { current } from "@reduxjs/toolkit";

const MapScreen = () => {
  const [locationPermission, setLocationPermission] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const selectedPoint = useSelector(selectDeliveryPoint);
  const [point, setPoint] = useState(selectedPoint);

  const handleLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    setLocationPermission(status);
    if (status !== "granted") {
      return;
    }
    let location = (await Location.getCurrentPositionAsync({})).coords;

    return location;
  };

  useEffect(() => {
    handleLocationPermission().then((location) => {
      setCurrentLocation(JSON.stringify(location));
    });

    console.log(currentLocation);
  }, []);

  const selectPoint = (point) => {
    setPoint(point);
  };

  return (
    <View className="flex-1 ">
      <Header title="Wybierz punkt na mapie" />
      <Text className="bg-white p-5">
        {locationPermission === "granted"
          ? "Lokalizacja udostepniona"
          : "Lokalizacnie nieudostepniona!"}
      </Text>
      <View className="rounded-t-[15px] overflow-hidden">
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          followsUserLocation
          className="w-full h-full"
          initialRegion={{
            latitude: 49.8013615,
            longitude: 18.7846833,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          toolbarEnabled={false}
        >
          {places.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              onPress={() => {
                selectPoint(marker);
              }}
            >
              <Image
                source={
                  point.id == marker.id
                    ? require("../../assets/marker-active.png")
                    : require("../../assets/marker.png")
                }
                resizeMode="contain"
                className="w-14 h-14"
              />
            </Marker>
          ))}
        </MapView>
      </View>
      <SelectedMapPointModal data={point} />
    </View>
  );
};

export default MapScreen;
