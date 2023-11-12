// Version de commonJS - type: "CommonJS" en el package.json
//const express = require("express");
// Funcionan igual
// Version de imports - type: "module" en el package.json
import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import db from "./config/db.js";

// Tener acceso a las variables de entorno
dotenv.config();

// Conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

// Ejecutar express y guardarlo en una constante
const app = express();

// Selecciona la variable de entorno llamada PORT o el puerto 3000
const port = process.env.PORT || 3000;

// Habilitar PUG como view engine
app.set("view engine", "pug");

// .use se ejecuta en todos los verbos, por lo que se ponga aqui se ejecuta varias veces
app.use((req, res, next) => {
  const year = new Date();

  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";

  // Ir al siguiente middleware en la pila
  return next(); // return sirve para obligar a que se ejecute el siguiente middleware y es opcional
});

// Agregar body parser para leer los datos obtenidos de un formulario con POST
app.use(express.urlencoded({ extended: true }));

// Definir la carpeta publica
app.use(express.static("public"));

// Desde la pagina principal agrega router y permite todos los verbos
app.use("/", router);

// .listen() es un metodo de express que inicia el sevidor y le indica que escuche en el puerto 4000
app.listen(port, () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
