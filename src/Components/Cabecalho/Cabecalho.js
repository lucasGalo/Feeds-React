import React, { Fragment } from 'react';
import { Text, Image, View } from 'react-native';
import estilo from "./estilo.js"

const Cabecalho = ({ idUsuario, nomeUsuario, urlImage }) => {

    return (
        <View style={estilo.cabecalho}>
            <Image
                source={{ uri: urlImage }}
                style={estilo.fotoUsuario} />
            <Text>{idUsuario} - {nomeUsuario}</Text>
        </View>
    );
}

export default Cabecalho;