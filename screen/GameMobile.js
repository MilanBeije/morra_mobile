// react
import React from "react";
// react native
import { View } from "react-native";
// morra component
import { Game } from "morra_components";

import BackgroundAnimation from "./BackgroundAnimation";

const GameMobile = ({ navigation }) => {
  const goToRanking = () => {
    navigation.navigate("RankingMobile");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ zIndex: 10, flex: 1 }}>
        <Game callback={goToRanking} />
      </View>
      <BackgroundAnimation />
    </View>
  );
};

export default GameMobile;
