// react
import React from "react";
// react native
import { View, ImageBackground, Image } from "react-native";
// import login
import { Login } from "morra_components";

const LoginMobile = ({ navigation }) => {
  const goToGame = () => {
    navigation.navigate("BackgroundAnimation");
  };

  return (
    <View style={{ flex: 1 }}>
      <Login callback={goToGame} />
    </View>
  );
};

export default LoginMobile;
