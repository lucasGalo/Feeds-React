import React, { Fragment, useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import estilo from './estilo.js'

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const tentarLogar = () =>{
    console.warn("logado", usuario, senha)
  }

  return (
    <Fragment style={estilo.conteiner}>
      <View>
        <TextInput
          style={estilo.inputs}
          placeholder="Usuário"
          onChangeText={texto => setUsuario(texto)} />
        <TextInput
          style={estilo.inputs}
          placeholder="Senha"
          secureTextEntry={true} 
          onChangeText={texto => setSenha(texto)} />
      </View>
      <View style={estilo.botaoView}>
        <Button
          title="Entrar"
          onPress={tentarLogar} />
      </View>
    </Fragment>
  )
};

export default Login;