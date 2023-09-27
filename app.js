"use strict";
//este app.js seria nuestra raiz de express


var express = require("express");

//Importing the routes here...
//archivo raiz de la configuracion de las rutas
var app = express();
var router = require("../OH-Express/routes/index.js");

//Your code here:
// Middleware to parse JSON requests:
//
// Using the routes here:
//
//en el envio de data te transforma un json en un objeto de lectura facil en JS
app.use(express.json());
app.use("/", router);


module.exports = app; // esto es solo para testear mas facil

if (!module.parent) app.listen(3000);
