const URL = 'https://rickandmortyapi.com/api/character/'
var xhttp = null

function obtener_personajes() {
    for (let i=1; i<=10; i++) {
        conectar(i)
    }
}

function conectar(personaje) {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = obtener_respuesta
    xhttp.open('GET', URL + personaje, true)
    xhttp.send()
}

var personaje = ''

function obtener_respuesta() {
    if (xhttp != null && xhttp.readyState == 4) {
        if (xhttp.status == 200) {
            let dato =  JSON.parse(xhttp.responseText)
            console.log(dato)

            let container = document.getElementById('container')
            let container_item = document.createElement('div')
            let img = document.createElement('img')
            img.src = dato.image
            let h1 = document.createElement('h1')
            let name = document.createTextNode( dato.name )
            h1.appendChild(name)
            container_item.appendChild(img)
            container_item.appendChild(h1)
            container.appendChild(container_item)
        }
    }
}

