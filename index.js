import { registerRootComponent } from "expo";

import App from "./App";

import * as Notifications from "expo-notifications";
import { Alert, Linking } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// async function registerForPushNotificationsAsync() {
//   let token;

//   const { status } = await Notifications.getPermissionsAsync();

//   if (status !== "granted") {
//     const { status } = await Notifications.requestPermissionsAsync();

//     if (status !== "granted") {
//       Alert.alert(
//         "Zezwól na powiadomienia",
//         "Aby otrzymywać powiadomienia z aplikacji, musisz zezwolić na ich wyświetlanie.",
//         [
//           {
//             text: "Anuluj",
//             style: "cancel",
//           },
//           {
//             text: "Włącz teraz",
//             onPress: () => Linking.openSettings(),
//           },
//         ]
//       );
//       return;
//     }
//   }

//   token = (await Notifications.getExpoPushTokenAsync()).data;
//   return token;
// }
// registerForPushNotificationsAsync();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
