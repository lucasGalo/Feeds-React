import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import estilo from './estilo';

const Foto = ({ urlFoto, descricao, qtdLikes }) => {
    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qtdLikes);
    const curtirFoto = () => {
        let qnt = likes
        if (curtiu) {
            qnt--;
        } else {
            qnt++;
        }        
        setLikes(qnt)        
        setCurtiu(!curtiu)
    }
    return (
        <Fragment>
            <Image style={estilo.imagem}
                source={{ uri: urlFoto }} />
            <Text>{descricao}</Text>
            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={curtirFoto}>
                    <Image
                        style={estilo.like}
                        source={ImgLike(curtiu)} />
                    <Text>curtidas {likes}</Text>
                </TouchableOpacity>
            </View>
        </Fragment>

    );
}

const ImgLike = (curtiu) => {
    if (curtiu) {
        return require("../../../res/img/s2-checked.png")
    } else {
        return require("../../../res/img/s2.png")
    }
}
export default Foto;