import React from "react";
import { View, Text, StyleSheet,} from "react-native";
/*import Comp1 from "./components/Comp1";
import { CMult1, CMult2, CMult3, } from "./components/CompMult";
import MinMax from "./components/MinMax";
import Botao from "./components/Botao";
import Random from "./components/Random";
import Titulo from "./components/Titulo";
import Contador from "./components/Contador";
*/
import Contador from "./components/Contador";


export default function App() {
  return (
    <View>
      <Text>Teste do App</Text>
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
      */}
      <Contador valor={100} incremento={4} />
    </View>
  );
}
