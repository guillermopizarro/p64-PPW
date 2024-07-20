const URL = "https://gateway.marvel.com:443/v1/public/characters";
var xhttp = null

const publicKey = "ea1bdd33bc6e4f522865590d3437966a";
const privateKey = "d64650e4aae877bc3c07b56d1636664a910bd2e7";

// Generar ts
var ts = new Date().getTime().toString();
// Generar hash md5
var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

var params = {
    ts: ts,
    apikey: publicKey,
    hash: hash,
    limit: 10  // Por ejemplo, obtener los primeros 10 personajes
};


function conectar(personaje) {
    xhttp = new XMLHttpRequest()
    xhttp.open('GET', URL + '?' + params.toString)
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.send()
}

function obtener_respuesta() {
    if (xhttp != null && xhttp.readyState == 4) {
        if (xhttp.status == 200) {
            let dato =  JSON.parse(xhttp.responseText)
            console.log(dato)

            /*let container = document.getElementById('container')
            let personaje = `<div class="container-item"><h1>${dato.name}</h1>
            <img src="${dato.image}" /><div class="container-item">`
            container.innerHTML = personaje*/
        } else {
            console.log(xhttp)
        }
    }
}


