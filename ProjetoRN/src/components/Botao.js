import React from "react";
import { View, Text, Button,} from "react-native";

export default ({props}) => {
    function executar() {
        console.warn('Executou!!!')
    }   
    return (
        <View>
            <Button title="Executar" onPress={executar} />
        </View>
    );
}