const express = require('express')
const mongoose=require('mongoose')
const app1=express()
const port=5000

const bodyParser=require('body-parser')
app1.use(bodyParser.json())
app1.use(bodyParser.urlencoded({extended:false}))

 //.connect("mongodb://localhost:27017/Truekec4")
mongoose
    .connect("mongodb+srv://trueke:Trueke2022@proyectoc4.hjfpmsc.mongodb.net/trueke")
    .then(console.log("Conectado a la base de datos"))

let Esquema=require('./Modelos/bd_articulos')

const rutas=require('./router/rutas')
app1.use('/servicios',rutas)

app1.listen(port,()=>console.log('Servidor...'))