const efetuarLogin = async (usuario, senha) => {
    let url = "192.168.11.2";
    if (Platform.OS == "ios") {
        url = "localhost";
    }
    const cabecalhoHTTP = {
        method: "POST",
        body: JSON.stringify({
            userName: usuario,
            password: senha
        }),
        header: {
            "Content-type": "aplication/json"
        }
    }
    const resposta = await fetch(`http://${url}:3030/users/login`, cabecalhoHTTP);

    if(resposta.ok){
        // consegui logar
    }else{
        throw new Error("Não foi possivel logar");
    }
    console.warn(resposta);

}

export default efetuarLogin;