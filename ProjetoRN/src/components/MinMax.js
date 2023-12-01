import React from "react";
import { View, Text, StyleSheet,} from "react-native";
import Estilo from "./Estilo";

export default ({min, max}) => {
    return (
        <View>
        <Text style={Estilo.Btext}>O valor {max} é maior que o valor {min}</Text>
        </View>
    );
    }