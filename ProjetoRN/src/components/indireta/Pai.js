import React, {useState} from "react";
import Filho from "./Filho";
import { Text, View } from "react-native";
import Estilo from "../Estilo";

export default props => {
    const [texto, setTexto] = useState('');
    const [num, setNum] = useState(0);

    function exibirValor(numero, texto) {
        setTexto(texto);
        setNum(numero);
    }

    return (
        <View>
        <Text style={Estilo.Btext}>{texto}{num}</Text>
        <Filho min={1} max={60} funcao={exibirValor}/>
        </View>
    )

}