var div_cajita = document.getElementById('cajita')
var id = null
var pos = 0

function mover () {
    clearInterval(id)
    id = setInterval(frame, 12)
}

function frame() {
    if (pos == 350) {
        clearInterval(id)
    } else {
        pos++
        //div_cajita.style.top = pos + 'px'
        div_cajita.style.left = pos + 'px'
    }
}

