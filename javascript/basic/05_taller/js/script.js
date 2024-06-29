var div_cajita = document.getElementById('cajita')
var es_presionado = false
var offset = [0,0]

div_cajita.addEventListener('mousedown', function(valor) {
    es_presionado = true

    offset = [
        div_cajita.offsetLeft - valor.clientX,
        div_cajita.offsetTop - valor.clientY
    ]
}, true)

div_cajita.addEventListener('mouseup', function(valor) {
    es_presionado = false
}, true)

div_cajita.addEventListener('mousemove', function(valor) {
    valor.preventDefault()

    if (es_presionado) {
        div_cajita.style.left = (valor.clientX + offset[0]) + 'px'
        div_cajita.style.top = (valor.clientY + offset[1]) + 'px'
    }
}, true)


