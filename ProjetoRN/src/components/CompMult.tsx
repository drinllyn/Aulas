import React from "react";
import { View, Text, StyleSheet,} from "react-native";
import Estilo from "./Estilo";


export function CMult1() {
  return (
    <View>
      <Text style={Estilo.Btext}>CMult1</Text>
    </View>
  );
}
function CMult2() {
  return (
    <View>
      <Text style={Estilo.Btext}>CMult2</Text>
    </View>
  );
}
function CMult3() {
  return (
    <View>
      <Text style={Estilo.Btext}>CMult3</Text>
    </View>
  );
}

export { CMult2, CMult3, };
