// react
import React from "react";
// react native
import { View } from "react-native";
// morra component
import { Game } from "morra_components";

import BackgroundAnimation from "./BackgroundAnimation";

const GameMobile = ({ navigation }) => {
  // const goBack = () => {
  //   navigation.goBack()
  // }

  return (
    <View style={{ flex: 1 }}>
      <BackgroundAnimation />
      <View style={{ zIndex: 10, flex: 1 }}>
        <Game />
      </View>
    </View>
  );
};

export default GameMobile;
