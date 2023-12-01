import React from "react";
import { View, Text, StyleSheet,} from "react-native";
import Comp1 from "./components/Comp1";
import { CMult1, CMult2, CMult3, } from "./components/CompMult";

const styles = StyleSheet.create({
    App: {
      flex: 1,
      backgroundColor: "#AA2",
      justifyContent: "center",
      textAlign: "center",
    },
  });

export default function App() {
  return (
    <View style={styles.App}>
      <Text>Teste do App</Text>
      <Comp1 />
        <CMult1 />
        <CMult2 />
        <CMult3 />
    </View>
  );
}


