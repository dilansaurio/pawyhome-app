//  const openNavigation = async () => {
//     const destination = `${DESTINATION.latitude},${DESTINATION.longitude}`;
//     const navigationUrl =
//       Platform.OS === "ios"
//         ? `http://maps.apple.com/?daddr=${destination}`
//         : Platform.OS === "android"
//           ? `google.navigation:q=${destination}`
//           : `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

//     try {
//       const supported = await Linking.canOpenURL(navigationUrl);

//       if (supported) {
//         await Linking.openURL(navigationUrl);
//         return;
//       }

//       await Linking.openURL(
//         `https://www.google.com/maps/search/?api=1&query=${destination}`,
//       );
//     } catch {
//       Alert.alert("No fue posible abrir la navegación");
//     }
//   };
