const URL = 'https://rickandmortyapi.com/api/character/'
var xhttp = null

function conectar(personaje) {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open('GET', URL + personaje, true)
    xhttp.send()
}

function obtener_respuesta() {
    if (xhttp != null && xhttp.readyState == 4) {
        if (xhttp.status == 200) {
            let dato =  JSON.parse(xhttp.responseText)
            console.log(dato)

            let container = document.getElementById('container')
            let personaje = `<div class="container-item"><h1>${dato.name}</h1>
            <img src="${dato.image}" /><div class="container-item">`
            container.innerHTML = personaje
        }
    }
}


