import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Platform,
  Text,
} from "react-native";
import Animated, {
  withTiming,
  withRepeat,
  withDelay,
  withSequence,
  useAnimatedStyle,
  EasingNode,
} from "react-native-reanimated";

import backgroundImage from "../assets/paralax.png";

const BackgroundAnimation = () => {
  const [start, setstart] = useState(0);
  useEffect(() => {
    let timeout;
    timeout = setTimeout(() => setstart(-1000), 500);
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withRepeat(
            withTiming(start, {
              duration: 50000,
            }),
            -1,
            true
          ),
        },
      ],
    };
  });
  //`${start ? animatedStyle : ""}`
  return (
    <View>
      <Animated.View style={[style.image, animatedStyle]}>
        <ImageBackground source={backgroundImage} style={style.image} />
      </Animated.View>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    zIndex: -10,
    width: Dimensions.get("window").width + 2000,
    height: Dimensions.get("window").height,
  },
});
export default BackgroundAnimation;
