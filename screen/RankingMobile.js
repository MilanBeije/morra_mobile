// react
import React from "react";
// react native
import { View } from "react-native";
// morra component
import { Ranking } from "morra_components";

const RankingMobile = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate("LoginMobile");
  };

  return (
    <View style={{ flex: 1,width:Dimensions.get("window").width,height:Dimensions.get("window").height }}>
      <Ranking callback={goToLogin} />
    </View>
  );
};

export default RankingMobile;
