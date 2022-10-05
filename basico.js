const http = require('http')

const server = http.createServer((peticion, respuesta) => {
   respuesta.end('Hola mundo')
})
const port=8080||process.env.PORT||8500
const connectedServer = server.listen(port, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer .address().port}`)
})