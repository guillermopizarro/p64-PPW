function realizar_peticion(tipo) {
    if (tipo == 'GET') {
        fetch('/mensaje')
            .then( (data) => data.json() )
            .then( (data) => {
                let container = document.getElementById('container')
                container.innerHTML = data.mensaje
            } )
            .catch( (mensaje) => console.error(`[error] - ${mensaje}`) )
    } else if (tipo == 'POST') {
        fetch('/', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            }
        })
            .then( (data) => data.json() )
            .then( (data) => {
                let container = document.getElementById('container')
                container.innerHTML = data.mensaje
            } )
            .catch( (mensaje) => console.error(`[error] - ${mensaje}`) )        
    }
}