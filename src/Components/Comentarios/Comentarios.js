import React from 'react';
import { Text, FlatList } from 'react-native';

const Comentarios = ({ comentarios }) => {
  return (
    <FlatList
      data={comentarios}
      keyExtractor={(item, index) => index.id}
      renderItem={({ item }) =>
        <Text>{item.text}</Text>}
    />
  );
};

export default Comentarios;