import React, { Fragment } from 'react';
import { Text, FlatList, TextInput, Image, View, TouchableOpacity } from 'react-native';
import estilo from '../Comentarios/estilo';

const Comentarios = ({ comentarios }) => {
  return (
    <Fragment>
      <FlatList
        data={comentarios}
        keyExtractor={(item, index) => index.id}
        renderItem={({ item }) =>
          <Text>{item.text}</Text>}
      />
      <View style={estilo.naMesmaLinha}>
        <TextInput
          style={{ flex: 1 }}
          placeholder={"Deixe seu comentário..."}
        />
        <TouchableOpacity>
          <Image
            style={estilo.imgSend}
            source={require("../../../res/img/send.png")} />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Comentarios;