import React from "react";
import { Text, Platform } from "react-native";
import Estilo from "./Estilo";

export default props => {
    if(Platform.OS === 'android') {
        return <Text style={Estilo.Btext}>Android</Text>
    } else if(Platform.OS === 'ios') {
        return <Text style={Estilo.Btext}>IOS</Text>
    } else {
        return <Text style={Estilo.Btext}>Eita!!!</Text>
    }
}