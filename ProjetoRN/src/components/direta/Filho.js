import React from "react";
import { View, Text } from "react-native";
import Estilo from "../Estilo";
export default props => {
    return (
      <>
        <Text style={Estilo.Btext}>{props.a}</Text>
        <Text style={Estilo.Btext}>{props.b}</Text>
      </>
    );
}