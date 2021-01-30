import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({

    conteiner:{
        flexGrow: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    inputs:{
        width: largura*0.8,
        textAlign: 'center',
        marginTop: 40,
        fontSize: 15
    },
    botaoView:{
        alignItems: 'center',
        marginBottom: 50
    }
})

export default estilo;