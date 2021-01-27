const lerFotos = async (callback) => {
    const fotosHTTP = await fetch("http://192.168.11.2:3030/feed");
    const fotosJson = await fotosHTTP.json();
    callback(fotosJson);
}

export default lerFotos