import React, { Fragment } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import estilo from './estilo.js'

const Login = () => {

  return (
    <Fragment style={estilo.conteiner}>
      <View>
        <TextInput 
        style={estilo.inputs}
        placeholder="Usuário" />
        <TextInput 
        style={estilo.inputs}
        placeholder="Senha" 
        secureTextEntry={true}/>
      </View>
      <Button title="Entrar" />
    </Fragment>
  )
};

export default Login;