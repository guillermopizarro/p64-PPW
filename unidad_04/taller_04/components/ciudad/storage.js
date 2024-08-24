const model = require('./model')

async function insertar_ciudad(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtener_ciudad(dato) {
        let mi_filtro = {}
     
        if (dato.nombre != null) {
           mi_filtro = { nombre: dato.nombre }
        }
   
        const data = await model.find( mi_filtro )
           .populate('pais')
           .exec( )

        let ciudades = []
        for (objeto of data) {
            let ciudad = {
                ciudad_id: objeto._id,
                ciudad_nombre: objeto.nombre,
                pais_nombre: objeto.pais.nombre
            }
            ciudades.push( ciudad )
        }
        return ciudades
}

module.exports = {
    insertar:insertar_ciudad,
    obtener:obtener_ciudad
}