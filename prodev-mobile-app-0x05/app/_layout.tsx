import { Stack } from "expo-router";
// import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}
    initialRouteName="index">
    <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}