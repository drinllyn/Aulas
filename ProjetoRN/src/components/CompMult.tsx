import React from "react";
import { View, Text, StyleSheet,} from "react-native";
import Style from "./style";

export function CMult1() {
  return (
    <View>
      <Text style={Style.text}>CMult1</Text>
    </View>
  );
}
function CMult2() {
  return (
    <View>
      <Text style={Style.text}>CMult2</Text>
    </View>
  );
}
function CMult3() {
  return (
    <View>
      <Text style={Style.text}>CMult3</Text>
    </View>
  );
}

export { CMult2, CMult3, };
