import React from "react";
import { Text } from "react-native";
import Estilo from "./Estilo";
import If from "./If";

export default ({usuario = {} }) => {
    return (
        <>
        <If test={usuario && usuario.nome && usuario.email}>
        <Text>
            Usuário Logado:    
        </Text>
        <Text style={Estilo.txtG}>
            {usuario.nome} - {usuario.email} 
        </Text>
        </If>
        </>
    )
}