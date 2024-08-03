const API = 'https://rickandmortyapi.com/api/character/'

var xhttp = null

function personaje(objeto) {
    let div = document.createElement('div')
    let h1_texto = document.createTextNode(objeto.name)
    let h1 = document.createElement('h1')
    h1.appendChild(h1_texto)
    div.appendChild(h1)
    let img = document.createElement('img')
    img.src = objeto.image
    div.appendChild(img)

    let contenedor = document.getElementById('container')
    contenedor.appendChild( div )
}

function obtener_personaje(id) {
    return new Promise( (resolve, reject) => {
        fetch( `${API}${id}` )
            .then( (data) => resolve( data.json() ) )
            .catch( (error) => reject(error) )
    } )
}

obtener_personaje(1)
    .then( (objeto) => { 
        personaje( objeto )
        return  obtener_personaje(2)
     } )
     .then( (objeto) => { 
        personaje( objeto )
        return  obtener_personaje(3)
     } )
     .then( (objeto) => { 
        personaje( objeto )
        return  obtener_personaje(4)
     } )
     .then( (objeto) => { 
        personaje( objeto )
        return  obtener_personaje(5)
     } )
     .then( (objeto) => { 
        personaje( objeto )
        return  obtener_personaje(6)
     } )
     .then( (objeto) => { 
        personaje( objeto )
        return  obtener_personaje(7)
     } )
     .then( (objeto) => { 
        personaje( objeto )
        return  obtener_personaje(8)
     } )
     .then( (objeto) => { 
        personaje( objeto )
        return  obtener_personaje(9)
     } )
     .then( (objeto) => { 
        personaje( objeto )
        return  obtener_personaje(10)
     } )
    .catch( (mensaje) => console.log(`[error] - ${mensaje}`) )