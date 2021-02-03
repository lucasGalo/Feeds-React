import AsyncStorage from '@react-native-community/async-storage';
import React, { Fragment, useState } from 'react';
import { Text, TextInput, Button, View, Platform } from 'react-native';
import efetuarLogin from '../../api/login.js';
import estilo from './estilo.js'

const Login = ({ navigation }) => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const tentarLogar = async () => {
    try {
      const token = await efetuarLogin(usuario, senha);
      await AsyncStorage.setItem("instalura_token", token) // armazenando dados na seção      
      const t = await AsyncStorage.getItem("instalura_token") // obtendo o token, no caso a variável.

      //Ir para a tela de Feed
      navigation.replace("Feed", {nome: usuario});

      console.warn(t);
    } catch (erro) {
      setMensagemErro(erro.message);
    }
  }

  return (
    <Fragment>
      <View style={estilo.conteiner}>
        <TextInput
          style={estilo.inputs}
          placeholder="Usuário"
          onChangeText={texto => setUsuario(texto)} />
        <TextInput
          style={estilo.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={texto => setSenha(texto)} />
        <Text>{mensagemErro}</Text>
      </View>
      <View style={estilo.botaoView}>
        <Button
          title="Entrar"
          onPress={tentarLogar} />
      </View>
    </Fragment>
  )
};

Login.navigationOptions = () => {
  // criando um objeto opcoes
  const opcoes = {
    title: "Login"
  }
  if(Platform.OS = "android"){
    opcoes.header = null
  }

  return opcoes;
}
export default Login;