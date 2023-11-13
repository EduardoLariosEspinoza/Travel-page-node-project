import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Tener acceso a las variables de entorno
dotenv.config();

// Configuracion de la conexion a la base de datos con sequelize
const db = new Sequelize(process.env.DATABASE_URL, {
  define: {
    timestamps: false, // Para que no agregue los campos de fecha de creacion y actualizacion
  },
  pool: {
    max: 25, // Maximo de conexiones
    min: 0, // Minimo de conexiones
    acquire: 30000, // Tiempo maximo de adquisicion de una conexion
    idle: 10000, // Tiempo maximo de inactividad de una conexion
  },
  operatorAliases: false, // Para que no muestre los operadores en consola
});

export default db;
