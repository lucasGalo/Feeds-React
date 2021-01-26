import React from 'react';
import { Text } from 'react-native';

const Cabecalho = ({idUsuario, nomeUsuario}) =>{
    return(<Text>{idUsuario} - {nomeUsuario}</Text>);
}

export default Cabecalho;