import React from 'react'
import Estilo from '../Estilo'
import { Text } from 'react-native'

export default props => {
    return (
        <Text style={Estilo.Btext}>{props.nome} {props.sobrenome}</Text>
    )
}