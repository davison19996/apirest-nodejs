git status//FRAMEWOR PARA CREAR UN SERVICIO WED FACILMENTE
const express = require("express")//es un framework 
//plugins para leer archivos
const fs = require("fs")
//INICIAMOS EL SERVIDOR WED DESDE EL METODO EXPRES
const app = express()
//midelwears
app.use(express.json())
//rutas

app.get("/",(req,res)=>{
    let productos =JSON.parse (fs.readFileSync("src/db/productos.json","utf8"))
    console.log(productos[0])
    res.json(productos)
})

app.post("/", (req,res)=>{
    let productos =JSON.parse (fs.readFileSync("src/db/productos.json","utf8"))
productos.push(req.body)
    res.json(productos)
    
})
app.delete("/",(req,res)=>{
    res.send("respuesta desde deletye")  
})
app.put("/",(req,res)=>{
    res.send("respuesta desde put")  
})
//METODO QUE PERMITE AL SERVIDOR WEDE ESCUCHAR EN UN PUERTO ESPEFICIO
app.listen(3000,() => {
    console.log("el servidor esta corriendo en http://localhost:3000/")

})