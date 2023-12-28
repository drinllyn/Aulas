import React from "react";
import { View, Text, FlatList } from "react-native";
import Estilo from "../Estilo";
import Produtos from "./Produtos";

export default props => {
    return (
    <>
    <Text style={Estilo.txtG}>Lista de Produtos</Text>
    {Produtos.map(
        p => { 
            return <Text key={p.id}>{p.id}) {p.nome} tem preço de R$ {p.preco}</Text>
            })}
    </>
    )
}
