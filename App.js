import React, { Fragment, useState, useEffect } from 'react';
import { ScrollView, FlatList, StatusBar, Platform } from 'react-native';
import lerFotos from './src/api/feed';
import { Cabecalho } from './src/Components/Cabecalho'; /*Trazendo o Cabecalho como um elmento */
import { Comentarios } from './src/Components/Comentarios';
import { Foto } from './src/Components/Foto';

const App = () => {
  const [fotos, setFotos] = useState([]);
  useEffect(() => {
    lerFotos(setFotos);
  }, [])
  let altura = 0;
  if(Platform.OS == "ios"){
    altura = 35;
  }
  return (
    <ScrollView style={{marginTop: altura}}>
      <StatusBar 
      backgroundColor="white"
      barStyle='dark-content'/>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho
              nomeUsuario={item.userName}
              urlImage={item.userURL} />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
              qtdLikes={item.likes} />
            <Comentarios
              comentarios={item.comentarios} />
          </Fragment>}
      />
    </ScrollView>
  )
};

export default App;