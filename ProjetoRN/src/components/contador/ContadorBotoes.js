import React from "react";
import { Button, View } from "react-native";
import Estilo from "../Estilo";


export default props => {
    return (
        <View style={Estilo.Float}>
        <Button title="+" onPress={props.inc}/>
        <Button title="-" onPress={props.dec}/>
        </View>
    )
}