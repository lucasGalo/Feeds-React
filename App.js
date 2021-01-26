/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import  {Text, Image, ScrollView} from 'react-native';


const App = () => (
  <ScrollView>
    <Image style={{width:100, height:100}}
    source={require("./res/img/alura.jpg")}/>
    <Text>Lucas</Text>
    <Text>Maria</Text>       
  </ScrollView>
);


export default App;

