import React from 'react';
import Feed from './src/Views/Feed/Feed'
import Login from './src/Views/Login/Login'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// criando o navegador de páginas.
const navigator = createStackNavigator({
  Login: { screen: Login }, // tela De login criar com nome de Login 1°Parametro
  Feed: { screen: Feed }// tela De feed criar com nome de Feed 1°Parametro
})

const AppContainer = createAppContainer(navigator)

const App = () => {

  return (
    <AppContainer />
  )
};

export default App;