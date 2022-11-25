// react
import React from "react";
// react native
import { View, Dimensions} from "react-native";
// import login
import { Login } from "morra_components";

const LoginMobile = ({ navigation }) => {
  const goToGame = () => {
    navigation.navigate("GameMobile");
  };

  return (
    <View style={{ flex: 1 ,width:Dimensions.get("window").width,height:Dimensions.get("window").height}}>
      <Login callback={goToGame} />
    </View>
  );
};

export default LoginMobile;
