import React, {useState} from "react";
import Filho from "./Filho";
import { Text } from "react-native";
import Estilo from "../Estilo";

export default props => {
    const [num, setNum] = useState(0);

    function exibirValor(numero) {
        setNum(numero);
    }

    return (
        <>
        <Text>{num}</Text>
        <Filho style={Estilo.Btext} min={1} max={60} funcao={exibirValor}/>
        </>
    )

}