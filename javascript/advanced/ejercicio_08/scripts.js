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

let ids = []

for (let i=1; i<=100; i++) {
   ids.push(i)
}
// Promesas encadenadas
let promesas = ids.map( (id) => obtener_personaje(id) )

Promise 
   .all( promesas )
   .then( (data) => {
      for (let i=0; i<data.length; i++) {
         personaje( data[i] )
      }
   } )