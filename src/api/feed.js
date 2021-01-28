import { Platform } from "react-native";

const lerFotos = async (callback) => {
    let url = "192.168.11.2";
    if(Platform.OS == "ios"){
        url = "localhost";
    }
    const fotosHTTP = await fetch(`http://${url}:3030/feed`);
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);
}

export default lerFotos