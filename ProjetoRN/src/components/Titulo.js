import React, {Fragment} from "react";
import { View, Text } from "react-native";
import Estilo from "./Estilo";

export default ({principal, secundario}) => {
    return (
        <>
        <React.Fragment>
        <Fragment>
            <Text style={Estilo.Btext}>{principal}</Text>
            <Text>{secundario}</Text>
        </Fragment>    
        </React.Fragment>   
        </>
    );
}