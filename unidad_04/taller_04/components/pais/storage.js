const model = require('./model')

async function insertar_pais(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_pais(dato) {
     let mi_filtro = {}
     
     if (dato.usuario != null) {
        mi_filtro = { nombre: dato.nombre }
     }

     const resultado = await model.find( mi_filtro )
     return resultado
}

module.exports = {
    insertar:insertar_pais,
    obtener:obtener_pais
}