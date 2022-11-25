// react
import React from "react";
// react native
import { View, Dimensions } from "react-native";
// morra component
import { Game } from "morra_components";

import BackgroundAnimation from "./BackgroundAnimation";

const GameMobile = ({ navigation }) => {
  const goToRanking = () => {
    navigation.navigate("RankingMobile");
  };

  return (
    <View style={{ flex: 1,width:Dimensions.get("window").width,height:Dimensions.get("window").height }}>
      <View style={{ zIndex: 10, flex: 1,height:'100%',width:'100%' }}>
        <Game navigateToRankingCallback={goToRanking} />
      </View>
      <BackgroundAnimation />
    </View>
  );
};

export default GameMobile;
