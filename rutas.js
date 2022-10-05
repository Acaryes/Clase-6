const http = require('http')
const serverConRouter= http.createServer( (peticion, respuesta) => {
    console.log({peticion})
    const {url} = peticion;
    let msj=''
    switch (url) {
        case '/hola':
            msj='Hola comision 32140 :) '
            break;

        case '/chau':
            msj='Chau comision 32140 :) '
            break;
    
        default:
            msj='Otra ruta'
            break;
    }
    respuesta.write(msj); 
    respuesta.end(); 
})

const connectedServer  = serverConRouter.listen(8080, () => {
   console.log(`Servidor Http escuchando en el puerto  ${connectedServer .address().port}`)
})