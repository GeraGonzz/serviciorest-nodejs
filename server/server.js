const config = require('./config/config');
const puerto = process.env.PORT;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



//Get Leer datos
app.get("/usuario", function (req, res) {
  res.json("get Usuario");
});

//Post Crear registros nuevos.
app.post("/usuario", function (req, res) {
  let body = req.body;
  if (body.nombre === undefined) {
    res.status(400).json({
      error: true,
      mensaje: "El parametro 'nombre' es necesario.",
    });
  }
  res.json({
    error: false,
    mensaje: "Request exitoso.",
    persona: body,
  });
});

//Put Actualizar registros.
app.put("/usuario/:id", function (req, res) {
  let id = req.params.id;
  res.json({
    id,
  });
});

//Delete elimina registros.
app.delete("/usuario/:id", function (req, res) {
  res.json("delete Usuario");
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en puerto ${puerto}`);
});
