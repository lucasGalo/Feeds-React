import React, { Fragment } from 'react';
import { Text, Image } from 'react-native';
import estilo from "./estilo.js"

const Cabecalho = ({ idUsuario, nomeUsuario }) => {
    return (
        <Fragment>
            <Image source={require("../../../res/img/alura.jpg")}
            style={estilo.fotoUsuario}/>
            <Text>{idUsuario} - {nomeUsuario}</Text>
        </Fragment>
    );
}

export default Cabecalho;