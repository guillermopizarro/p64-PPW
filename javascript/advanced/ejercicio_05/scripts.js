const API = 'https://rickandmortyapi.com/api/character/'

var xhttp = null

function personaje(texto) {
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(texto.name)
    let h1 = document.createElement('h1')
    h1.appendChild(h1_texto)
    div.appendChild(h1)
    let img = document.createElement('img')
    img.src = texto.image
    div.appendChild(img)

    let contenedor = document.getElementById('container')
    contenedor.appendChild( div )
}

function cargar_datos(url_api, fn) {
    xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = function(e) {
        if (xhttp && xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                fn(null, JSON.parse(xhttp.responseText))
            } else {
                const error = `[error]: ${url_api}`
                fn(error, null)
            }
        }
    }
    xhttp.send()
}

const invocacionSincronica = function(error, data) {
    if (error)
        return console.error( error )
    console.log( data.info.count )
    cargar_datos( API + data.results[0].id, function(error2, data2) {
        if (error2)
            return console.error( error2 )
        personaje( data2 )
        cargar_datos( API + data.results[1].id, function(error3, data3) {
            if (error3)
                return console.error( error3 )
            personaje( data3 )
            cargar_datos( API + data.results[2].id, function(error4, data4) {
                if (error4)
                    return console.error( error4 )
                personaje( data4 )
                cargar_datos( API + data.results[3].id, function(error5, data5) {
                    if (error5)
                        return console.error( error5 )
                    personaje( data5 )
                } )
            } )
        } )
    } )
}

cargar_datos(API, invocacionSincronica)