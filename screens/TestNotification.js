import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { useNavigation } from "@react-navigation/native";
import { sub } from "react-native-reanimated";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const TestNotification = () => {
  const navigation = useNavigation();

  const triggerNotifications = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Książka gotowa do odbioru!",
        body: "Twoja książka Harry Potter i Komnata Tajemnic jest gotowa do odebrania.",
        data: {
          url: "https://wp.pl",
        },
      },
      usesDefaultSound: true,
      trigger: null,
      ios: {
        lockScreenVisibility: "visible",
      },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      triggerNotifications();
    }, 2000);

    const subscription = Notifications.addNotificationResponseReceivedListener(
      () => {
        navigation.navigate("OrderDetailsScreen", { goBack: false });
      }
    );
    return () => subscription.remove();
  }, []);

  return (
    <View>
      <Text>TestNotification</Text>
    </View>
  );
};

export default TestNotification;
