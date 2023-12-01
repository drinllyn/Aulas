import React from "react";
import {Text, Button} from "react-native";
import Estilo from "./Estilo";

export default ({valor, incremento}) => {
    const [numero] = React.useRef(0);
    const incrementar = () => {
        numero++;
        console.warn(numero);
    }
    const decrementar = () => {
        numero--;
        incremento(numero);
    }
    const zerar = () => {
        numero = 0;
        incremento(numero);
    }
    return (
        <>
            <Text style={Estilo.Btext}>{valor}</Text>
            <Button title="Acrecentar" onPress={incrementar} />
            <Button title="Diminuir" onPress={decrementar} />
            <Button title="Zerar" onPress={zerar} />
        </>
    );
}