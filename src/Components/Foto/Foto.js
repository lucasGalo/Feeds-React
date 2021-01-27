import React, { Fragment } from 'react';
import { Image, Text } from 'react-native';
import estilo from './estilo';

const Foto = ({urlFoto, descricao}) => {
  return (
    <Fragment>
      <Image style={estilo.imagem}
        source={{uri: urlFoto}} />
      <Text>{descricao}</Text>
    </Fragment>

  );
}
export default Foto;