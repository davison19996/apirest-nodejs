//FRAMEWOR PARA CREAR UN SERVICIO WED FACILMENTE
const express = require("express")//es un framework 
//plugins para leer archivos
const fs = require("fs")
//INICIAMOS EL SERVIDOR WED DESDE EL METODO EXPRES
const app = express()
//midelwears
app.use(express.json())
//rutas

app.use("/api",require("./routs/index.route"))

/*app.get("/producto/:nombre?", (req, res) => {

    let productos = JSON.parse(fs.readFileSync("src/db/productos.json", "utf8"))
    //si el parametro existe
    let response = []
    //si el parametro nombre existe
    if (req.params.nombre) {
        productos.map((value) => {
            if (req.params.nombre == value.nombre) {
                //aqi se encontro una coincidencia
                response.push(value)
            }
        })
    } else {
        response = productos
    }
    console.log(response)
    res.json(response)
})

app.post("/producto", (req, res) => {
    let productos = JSON.parse(fs.readFileSync("src/db/productos.json", "utf8"))
    productos.push(req.body)
    fs.writeFileSync("src/db/productos.json", JSON.stringify(productos))
    res.json(productos)


})
app.delete("/producto/:nombre", (req, res) => {
    let nombre = req.params.nombre
    let productos = JSON.parse(fs.readFileSync("src/db/productos.json", "utf8"))
    let index

    productos.map((value, i) => {
        if (value.nombre == nombre) {
            value = i

        }
    })
    productos.splice(index, 1)
    fs.writeFileSync("src/db/productos.json", JSON.stringify(productos))
    res.json(productos)
})
app.put("/producto/:nombre", (req, res) => {
    //res.send("respuesta desde put")
    //actualizar recurso
    let nombre = req.params.nombre
    let productos = JSON.parse(fs.readFileSync("src/db/productos.json", "utf8"))
    let index

    productos.map((value, i) => {
        if (value.nombre == nombre) {
            value = i

        }
    })
    productos[index] = req.body
    fs.writeFileSync("src/db/productos.json", JSON.stringify(productos))
    res.json(req.body)
})
app.get("/usuario", (req, res) => {
    res.send("desde get usuario")
})*/


//METODO QUE PERMITE AL SERVIDOR WEDE ESCUCHAR EN UN PUERTO ESPEFICIO
app.listen(3000, () => {
    console.log("el servidor esta corriendo en http://localhost:3000/")

})