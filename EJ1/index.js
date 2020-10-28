const express = require("express");
const app = express();
app.use(express.static("public"))
let animales = [
  {
    nombre: "Felix",
    edad: 5,
    animal: "gato",
  },
  {
    nombre: "Paco",
    edad: 7,
    animal: "pájaro",
  },
  {
    nombre: "Ágata",
    edad: 8,
    animal: "loba",
  },
  {
    nombre: "Curro",
    edad: 4,
    animal: "pingüino",
  },
];

app.get("/", function (req, res) {
  let mensaje = "";
  for (let i = 0; i < animales.length; i++) {
    mensaje += `
        <h1>${animales[i].nombre}</h1>
        <p>${animales[i].edad}</p>
        <p>${animales[i].animal}</p>
        <form action="/adoptar"><button value="${animales[i].nombre}" name="nombre" type="submit">Adoptar</button></form>
        `;
  }

  res.send(mensaje);
});

app.get("/sumar-animal", function (req, res) {
  let nombre = req.query.nombre
  let bicho = req.query.bicho
  let edad= req.query.edad
  let animal = {
    nombre: nombre,
    edad: edad,
    animal: bicho, 
  }
  animales.push(animal)

  res.send(animal);
});

app.get("/adoptar", function(req,res){
  let nombre = req.query.nombre
  for(let i = 0 ; i< animales.length; i++){
    if(nombre === animales[i].nombre){
      animales.splice(i,1)
    }
  }
  res.send(animales)
});




app.listen(3000);
