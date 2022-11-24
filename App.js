// react
import React from "react";
// react native
import { SafeAreaView, StatusBar } from "react-native";
// morra components
import GameMobile from "./screen/GameMobile";
import LoginMobile from "./screen/LoginMobile";
import BackgroundAnimation from "./screen/BackgroundAnimation";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// creo lo stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#F752E0"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: true }}
          initialRouteName="Login"
        >
          <Stack.Screen name="LoginMobile" component={LoginMobile} />
          <Stack.Screen name="GameMobile" component={GameMobile} />
          <Stack.Screen
            name="BackgroundAnimation"
            component={BackgroundAnimation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
