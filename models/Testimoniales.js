import { Sequelize } from "sequelize";
import db from "../config/db.js";

// Cada vez que se crea un modelo se crea una tabla en la base de datos

// Cada Testimonial de la tabla testimoniales cumple con el modelo
export const Testimonial = db.define("testimoniales", {
  nombre: {
    type: Sequelize.STRING,
  },
  correo: {
    type: Sequelize.STRING,
  },
  mensaje: {
    type: Sequelize.STRING,
  },
});
