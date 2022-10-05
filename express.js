
const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
    res.json({ mensaje: 'hola mundo desde get' })
 })
 app.post('/', (req, res) => {
    res.send({ mensaje: 'hola mundo desde post' })
 })
 app.put('/',(req,res)=>{
    res.send({ mensaje: 'hola mundo desde put' })
 })
 app.get('/saludo',(req,res)=>{
    res.send({ mensaje: 'saludo mundo' })
 })
 app.get('/chau',(req,res)=>{
     console.log({req})
    res.send({ mensaje: 'chau mundo' })
 })
const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto  ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor  ${error}`))