import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { curtirFoto, imgLike } from '../../api/curtidas';
import estilo from './estilo';

const Foto = ({ urlFoto, descricao, qtdLikes }) => {
    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qtdLikes);
    const clicouCurtir = (curtiu, likes) => {
        const [novoEstCurtiu, novoEstQnt] = curtirFoto(curtiu, likes)
       setLikes(novoEstQnt)
       setCurtiu(novoEstCurtiu)
    }
    return (
        <Fragment>
            <Image style={estilo.imagem}
                source={{ uri: urlFoto }} />
            <Text>{descricao}</Text>
            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={clicouCurtir}>
                    <Image
                        style={estilo.like}
                        source={imgLike(curtiu)} />
                    <Text>curtidas {likes}</Text>
                </TouchableOpacity>
            </View>
        </Fragment>

    );
}

export default Foto;