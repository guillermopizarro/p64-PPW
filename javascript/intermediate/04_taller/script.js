// Tipos de funciones

// Funcion declarativa
function imprimir() {
    console.log('Hola mundo.')
}

imprimir()

// Funcion expresiva o tambien denominada como anonima
const suma = function(a, b) {
    return (a + b)
} 

console.log( suma(10, 20) )

// Funcion flecha
const suma2 = (a, b) => {
    let total = a + b
    console.log(`La suma de ${a} y ${b} es ${total}.`)
}

suma2(100, 200)

const suma3 = (a, b) => a + b

console.log( suma3(10000, 2000) )