import React, { Fragment } from 'react';
import { ScrollView,  FlatList } from 'react-native';
import {Cabecalho} from './src/Components/Cabecalho'; /*Trazendo o Cabecalho como um elmento */
import Foto from './src/Components/Foto';

const informacoes = [
  { id: 1, usuario: "Ricardo" },
  { id: 2, usuario: "Maria" },
  { id: 3, usuario: "Jose" }
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.usuario} />
            <Foto />
          </Fragment>}
      />
    </ScrollView>
  )
};

export default App;