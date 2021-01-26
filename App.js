/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import  {Text, Image, ScrollView, Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get("screen").width;
const App = () => (
  <ScrollView>
    <Image style={estilo.imagem}
    source={require("./res/img/alura.jpg")}/>
    <Text>Lucas</Text>
    <Text>Maria</Text>       
  </ScrollView>
);

const estilo = StyleSheet.create({
  imagem:{
    width:largura, 
    height:largura
  }
})

export default App;

