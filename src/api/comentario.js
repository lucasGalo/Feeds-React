const adicionarComentario = (comentario, usuario) =>{
    console.log("comentario: " + comentario + "usuario: " + usuario)
    const novoComentario = {
        date: Date.now(),
        text: comentario,
        userName: usuario
    }

    return novoComentario;
}

export default adicionarComentario;