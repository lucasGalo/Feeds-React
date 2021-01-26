import React, { Fragment } from 'react';
import { Image } from 'react-native';
import estilo from './estilo';

const Foto = () => (     
          <Image style={estilo.imagem}
            source={require("../../../res/img/alura.jpg")} />

);

export default Foto;