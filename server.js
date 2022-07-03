const express = require(`express`);

const app = express();

// const fs= require('fs')

// fs.promises.readFile('producto.txt','utf-8')



class Contenedor{
    constructor (){
        this.productos='n3.txt';
        this.id= 1;
    }}

    function randomItem(productos){
        return productos [Math.floor(Math.random()*productos.length)];
    }
    

let productos =[
{"title":"Guitarra Fender", "precio":750, "url" : `https://musimundo.uy/catalogo/ofertas-junio-161.jpg`, "id" : `01`,"tipo": "guitarra" },
{"title":"Guitarra ESP","precio": 650,"url":`https://musimundo.uy/catalogo/ofertas-junio-163.jpg`, "id" : `02`, "tipo": "guitarra"},
{"title":" Bajo Squier", "precio": 350 , "url": `https://musimundo.uy/catalogo/ofertas-junio-163.jpg`, "id": `03`, "tipo": "bajo"}
];


const PORT = 8080

const server = app.listen(process.env.PORT || PORT, () => console.log(`Escucha Servidor en PORT ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));

const random = productos[(Math.floor(Math.random()*productos.length))];



app.get(`/intro`, (req, res) => {
    res.send (`<h1>"Desafio Nº3"</h1> 
    <br> Alumno Santiago Draper.<p> <button> <a href="http://localhost:8080/productos">  PRODUCTOS </a> </button> <p>
    <button> <a href="http://localhost:8080/productos/bajo">  bajo </a> </button> <p>
    <button> <a href="http://localhost:8080/random">  Random </a> </button>`) 

})



app.get(`/productos`, (req, res) => {
    res.send(productos)
}
)

app.get(`/random`, (req, res) => {
    res.send (random)
}
)



app.get(`/productos/bajo`, (req, res) => {
    res.send(productos[2])

})

// esta forma la vi a traves de lo subido a github pero no me funcionó. 
// app.get('/pRandom', async (req, res) => {
//     const p = await productos.getAll();
//     const numeroRandom = Math.floor(Math.random() * p.length);
//     res.send(p[numeroRandom]);
// })



console.log(productos[0])
console.log(random)
