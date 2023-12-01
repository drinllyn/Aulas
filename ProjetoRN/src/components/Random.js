import React, { useState } from "react";
import { View, Text, Button,} from "react-native";
import Estilo from "./Estilo";

 export default ({min, max}) => {
        const [numero, setNumero] = useState(1);
        const GerarNumero = () => {
            const NumeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
            setNumero(NumeroRandom);
            console.warn(numero, NumeroRandom);
        }
        return (
            <View>
                <Text style={Estilo.Btext}>O numero gerado é: {numero}</Text>
                <Button title="Gerar" onPress={GerarNumero} />
            </View>
        );
 }

