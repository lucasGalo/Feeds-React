/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import { Text, Image, ScrollView, Dimensions, StyleSheet, FlatList } from 'react-native';
import Cabecalho from './src/Components/Cabecalho';

const largura = Dimensions.get("screen").width;
const informacoes = [
  {id:1, usuario: "Ricardo" },
  {id:2, usuario: "Maria" },
  {id:3, usuario: "Jose" }
]
const App = () => (
  <ScrollView>
    <FlatList
      data={informacoes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) =>      
        <Fragment>
          <Cabecalho idUsuario={item.id} nomeUsuario={item.usuario}/>        
          <Image style={estilo.imagem}
            source={require("./res/img/alura.jpg")} />
        </Fragment>
      } />
  </ScrollView>
);

const estilo = StyleSheet.create({
  imagem: {
    width: largura,
    height: largura
  }
})

export default App;