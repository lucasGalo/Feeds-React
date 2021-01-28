import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { curtirFoto, imgLike } from '../../api/curtidas';
import estilo from './estilo';

const Foto = ({ urlFoto, descricao, qtdLikes }) => {
    console.log("qtdLikes: " + qtdLikes)
    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qtdLikes);

    const clicouCurtir = () => {
        const [novoEstCurtiu, qnt] = curtirFoto(curtiu, likes)
        setLikes(qnt)
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