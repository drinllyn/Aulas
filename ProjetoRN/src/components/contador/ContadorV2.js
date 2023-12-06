import React, { useState } from "react";
import Estilo from "../Estilo";
import { Text } from "react-native";
import ContadorDisplay from "./ContadorDisplay";
import ContadorBotoes from "./ContadorBotoes";

export default props => {
    const [Num, setNum] = useState(0);

    const inc = () => setNum(Num + 1);
    const dec = () => setNum(Num - 1);
    return (
        <>
        <Text style={Estilo.Btext}>Contador</Text>
        <ContadorDisplay num={Num}/>
        <ContadorBotoes inc={inc} dec={dec}/>
        </>
    )
}