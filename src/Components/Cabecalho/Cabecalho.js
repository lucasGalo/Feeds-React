import React, { Fragment } from 'react';
import { Text, Image, View } from 'react-native';
import estilo from "./estilo.js"

const Cabecalho = ({ idUsuario, nomeUsuario }) => {
    return (
        <View style={estilo.cabecalho}>
            <Image source={require("../../../res/img/alura.jpg")}
            style={estilo.fotoUsuario}/>
            <Text>{idUsuario} - {nomeUsuario}</Text>
        </View>
    );
}

export default Cabecalho;