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
        headers: {
            "Content-type": "application/json"
        }
    }
    const resposta = await fetch(`http://${url}:3030/users/login`, cabecalhoHTTP);

    if(resposta.ok){
        // consegui logar
    }else{
        throw new Error("Não foi possivel logar");
    }
}

export default efetuarLogin;