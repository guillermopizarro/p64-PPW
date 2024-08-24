const storage = require('./storage')

function insertar_ciudad( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato.nombre ) {
            reject( 'Los datos se encuentran incompletos.' )
        } else {
            resolve( storage.insertar( dato ) )
        }
    } )
}

function obtener_ciudad( dato ) {
    return new Promise( (resolve, reject) => {
        if (!dato) {
            reject( 'No existen datos' )
        } else {
            resolve( storage.obtener( dato ) )
        }
    } )
}

module.exports = {
    insertar_ciudad,
    obtener_ciudad
}