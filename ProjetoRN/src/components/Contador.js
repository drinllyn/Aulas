import React from "react";
import {Text, Button} from "react-native";
import Estilo from "./Estilo";

export default ({valor, incremento}) => {

    const [numero, setValor] = React.useState(valor);
    const incrementar = () => setValor(numero + incremento);
    const decrementar = () => setValor(numero - incremento);
    const zerar = () => setValor(0);
    return (
        <>
            <Text style={Estilo.Btext}>{numero}</Text>
            <Button title="Acrecentar" onPress={incrementar} />
            <Button title="Diminuir" onPress={decrementar} />
            <Button title="Zerar" onPress={zerar} />
        </>
    );
}