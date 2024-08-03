const express = require('express')
const body_parser = require('body-parser')
const router = express.Router()

var app = express()

app.use( body_parser.json() )
app.use( body_parser.urlencoded( {extended:false} ) )
app.use( router )

router.get('/mensaje', function (req, res) {
    res.send({mensaje:'Hola desde GET.'})
})

router.post('/', function (req, res) {
    res.send({mensaje:'Hola desde POST.'})
})

app.use('/', express.static('frontend'))

let puerto = 3000
app.listen(puerto)
console.log(`La aplicación se encuentra funcionando en http://localhost:${puerto}/`)