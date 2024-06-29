let articulos = [
    { nombre: 'TV Sony', modelo: 'KD-65X85J LA8', costo: 1999 },
    { nombre: 'Audifonos Inalambricos', modelo: 'WH-CH710N', costo: 259 },
    { nombre: 'Auriculares inalámbricos con Noise Cancelling', modelo: 'WF1000XM4/BMUC', costo: 321.9 },
    { nombre: 'Smart TV Samsung', modelo: '55" AU7000 UHD 4K', costo: 884 },
    { nombre: 'Laptop Lenovo', modelo: 'Core i3 1ma, 1tb, 12gb, touch, 15 pulg', costo: 656.25 },
    { nombre: 'Laptop Dell', modelo: 'Core i7 11va, 512gb ssd, 16gb, tec iluminado', costo: 1207.51 }
]

const imprimir_objeto = (objeto) => console.log( `${objeto.nombre} - ${objeto.modelo}, valor: $ ${objeto.costo}` )

//for (let elemento of articulos) {
//    imprimir_objeto( elemento )
//}

articulos.forEach( (objeto) => imprimir_objeto(objeto) )

let articulos_baratos = articulos.some( (objeto) => objeto.costo <=100 )

if (articulos_baratos) {
    console.log( 'Existen articulos baratos.' )
} else {
    console.log( 'No existen articulos baratos.' )
}


console.log('=========================================================')
console.log('USO DEL FILTER')
console.log('=========================================================')

let articulos_baratos_lst = articulos.filter( (articulo) => articulo.costo <= 1000 )
articulos_baratos_lst.forEach( (articulo) => imprimir_articulo(articulo) )

console.log('=========================================================')
console.log('USO DEL MAP')
console.log('=========================================================')

let articulos_actualizados = articulos.map( (dato) => dato.nombre.toUpperCase() )
articulos_actualizados.forEach( (dato) => console.log(dato) )


let articulos_actualizados2 = articulos.map( 
    (dato) => { 
        dato.nombre = dato.nombre.toUpperCase() 
        return dato
    }
)
articulos_actualizados2.forEach( (articulo) => imprimir_articulo(articulo) )

console.log('==================================')
console.log('Uso de FIND')
console.log('==================================')

//articulos.forEach( (articulo) => imprimir_articulo(articulo) )
let articulo_encontrado = articulos.find( (dato) => dato.nombre == 'TV SONY' )
console.log( articulo_encontrado )