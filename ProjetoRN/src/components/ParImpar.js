import React from "react";
import { Text, View } from "react-native";
import Estilo from "./Estilo";

export default ({ num = 0 }) => {
    return (
        <View>
            <Text style={Estilo.Btext}>O resultado é:</Text>
            {num % 2 === 0 
            ? (<Text style={Estilo.Btext}>Par</Text>) 
            : (<Text style={Estilo.Btext}>Ímpar</Text>)
            }
        </View>
    );
};