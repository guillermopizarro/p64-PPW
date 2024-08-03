const express = require('express')

var app = express()

app.use('/', function(req, res){
    res.send('HOLA MUNDO!!!')
})

let puerto = 3000
app.listen(puerto)
console.log(`La aplicación se encuentra funcionando en http://localhost:${puerto}/`)