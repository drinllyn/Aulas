import React from "react";
import { View, Text, StyleSheet,} from "react-native";
import Estilo from "./components/Estilo";
/*import Comp1 from "./components/Comp1";
import { CMult1, CMult2, CMult3, } from "./components/CompMult";
import MinMax from "./components/MinMax";
import Botao from "./components/Botao";
import Random from "./components/Random";
import Titulo from "./components/Titulo";
import Contador from "./components/Contador";
import Contador from "./components/Contador";
import Pai from "./components/direta/Pai";
import Pai from "./components/indireta/Pai";
import ContadorV2 from "./components/contador/ContadorV2";
import Diferenciar from "./components/Diferenciar";
import ParImpar from "./components/ParImpar";
*/
import Pai from "./components/relacao/Pai";


export default function App() {
  return (
    <View style={Estilo.View}>
      <Text style={Estilo.Btext}>Teste do App</Text>
      {/*
      <Comp1 />
      <CMult1 />
      <CMult2 />
      <CMult3 />
      <MinMax min={3} max={20} />
      <Botao />
      <Random min={1} max={60} />
      <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto" />
      <Contador valor={100} incremento={13} />
      <Contador valor={100} incremento={4} />
      <Pai />
      <ContadorV2 />
      <Diferenciar />
      <ParImpar num={3} />
      */}
      <Pai />
    </View>

  );
}
