/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import { Text, Image, ScrollView, Dimensions, StyleSheet, FlatList } from 'react-native';

const largura = Dimensions.get("screen").width;
const informacoes = [
  { usuario: "Ricardo" },
  { usuario: "Maria" },
  { usuario: "Jose" }
]
const App = () => (
  <ScrollView>
    <FlatList 
    data={informacoes}
    renderItem={({item}) =>    
      <Fragment>
        <Text>{item.usuario}</Text>
        <Image style={estilo.imagem}
          source={require("./res/img/alura.jpg")} />
      </Fragment>
     }/>
  </ScrollView>
);

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura
  }
})

export default App;