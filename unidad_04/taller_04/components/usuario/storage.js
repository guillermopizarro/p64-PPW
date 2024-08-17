const model = require('./model')

async function insertar_usuario(dato) {
    const resultado = await new model(dato)
    return resultado
}

async function obtener_usuario(dato) {
     let mi_filtro = {}
     
     if (dato.usuario != null) {
        mi_filtro = { usuario: dato.usuario }
     }

     const resultado = await model.find( mi_filtro )
     return resultado
}

module.exports = {
    insertar:insertar_usuario,
    obtener:obtener_usuario,
}