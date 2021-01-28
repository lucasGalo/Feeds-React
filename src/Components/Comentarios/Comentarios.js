import React, { Fragment, useState } from 'react';
import { Text, FlatList, TextInput, Image, View, TouchableOpacity } from 'react-native';
import estilo from '../Comentarios/estilo';

const Comentarios = ({ comentarios }) => {
  const [estComentario, setComentarios] = useState(comentarios)
  const adicionarComentario = () => {
    console.warn(conteudoCampoInput);
  }

  let conteudoCampoInput = "";

  return (
    <Fragment>
      <FlatList
        data={estComentario}
        keyExtractor={(item, index) => index.id}
        renderItem={({ item }) =>
          <Text>{item.text}</Text>}
      />
      <View style={estilo.naMesmaLinha}>
        <TextInput
          onChangeText={texto => conteudoCampoInput = texto}
          style={{ flex: 1 }}
          placeholder={"Deixe seu comentário..."}
        />
        <TouchableOpacity onPress={adicionarComentario}>
          <Image
            style={estilo.imgSend}
            source={require("../../../res/img/send.png")} />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Comentarios;