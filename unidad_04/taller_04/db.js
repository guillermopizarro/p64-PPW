const db = require('mongoose')

db.Promise = global.Promise

async function conectar( url ) {
    await db.connect( url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbname: 'ups'
    } )
    .then (() => console.log('[db] - conexion exitosa.') )
    .catch( (error) => console.error( `[db] - ${error}` ) )
}

module.exports = conectar