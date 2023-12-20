import React from "react";
import { View, Text, FlatList } from "react-native";
import Estilo from "../Estilo";
import Produtos from "./Produtos";

export default (props) => {
    <>
    <Text style={Estilo.txtG}>Lista de Produtos</Text>
    <FlatList>
        data={Produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={({item: p}) => {
            return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
        }}
    </FlatList> 
    </>
    
}
