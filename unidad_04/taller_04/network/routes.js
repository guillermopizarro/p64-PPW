const usuario = require('../components/usuario/interface')
const ciudad = require('../components/ciudad/interface')
const pais = require('../components/pais/interface')

const routes = function( server ) {
    server.use('/usuario', usuario)
    server.use('/ciudad', ciudad)
    server.use('/pais', pais)
}

module.exports = routes