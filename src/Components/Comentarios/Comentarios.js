import React, { Fragment, useState } from 'react';
import { Text, FlatList, TextInput, Image, View, TouchableOpacity } from 'react-native';
import estilo from '../Comentarios/estilo';

const Comentarios = ({ comentarios, adicionarComentario }) => {
  const [estComentarios, setComentarios] = useState(comentarios);

  const comentar = () => {

    campoInput.clear();
    if (conteudoCampoInput != "") {
      const novoComentario = adicionarComentario(
        conteudoCampoInput,
        "Lucas")
      setComentarios([...estComentarios, novoComentario])
    }
  }

  let campoInput;
  let conteudoCampoInput = "";

  return (
    <Fragment>
      <FlatList
        data={estComentarios}
        keyExtractor={(item, index) => index.id}
        renderItem={({ item }) =>
          <View style={estilo.naMesmaLinha}>
            <Text>{item.userName}: </Text>
            <Text>{item.text}</Text>
          </View>
        }
      />
      <View style={estilo.naMesmaLinha}>
        <TextInput
          ref={textInput => campoInput = textInput}
          onChangeText={texto => conteudoCampoInput = texto}
          style={{ flex: 1 }}
          placeholder={"Deixe seu comentário..."}
        />
        <TouchableOpacity onPress={comentar}>
          <Image
            style={estilo.imgSend}
            source={require("../../../res/img/send.png")} />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Comentarios;