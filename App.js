import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function App() {
  const prova = () => {
    console.log("abdxsfsq");
  };
  return (
    <View style={styles.container}>
      <Text>Inserisci la Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
  },
});
