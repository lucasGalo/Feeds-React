import React, { Fragment, useState, useEffect } from 'react';
import { ScrollView, FlatList, StatusBar, Platform } from 'react-native';
import { Cabecalho } from '../../Components/Cabecalho'; /*Trazendo o Cabecalho como um elmento */
import { Foto } from '../../Components/Foto';
import { Comentarios } from '../../Components/Comentarios';
import lerFotos from '../../api/feed';
import { curtirFoto, imgLike } from '../../api/curtidas';

const Feed = () => {
    const [fotos, setFotos] = useState([]);
    useEffect(() => {
        lerFotos(setFotos);
    }, [])
    let altura = 0;
    if (Platform.OS == "ios") {
        altura = 35;
    }
    return (
        <ScrollView style={{ marginTop: altura }}>
            <StatusBar
                backgroundColor="white"
                barStyle='dark-content' />
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
                            qtdLikes={item.likes}
                            imgLike={imgLike}
                            curtirFoto={curtirFoto} />
                        <Comentarios
                            comentarios={item.comentarios} />
                    </Fragment>}
            />
        </ScrollView>
    )
};

export default Feed;