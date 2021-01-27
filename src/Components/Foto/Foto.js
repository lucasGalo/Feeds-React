import React, { Fragment, useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import estilo from './estilo';

const Foto = ({ urlFoto, descricao }) => {
    const [curtiu, setCurtiu] = useState(false);
    const curtirFoto = () =>{
        setCurtiu(!curtiu)
    }
    return (
        <Fragment>
            <Image style={estilo.imagem}
                source={{ uri: urlFoto }} />
            <Text>{descricao}</Text>
            <TouchableOpacity onPress={curtirFoto}>
                <Image
                    style={estilo.like}
                    source={
                        ImgLike(curtiu)} />
            </TouchableOpacity>
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