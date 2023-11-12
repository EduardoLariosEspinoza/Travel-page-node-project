import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

// Este controlador se encarga solo de mostrar las paginas

const paginaInicio = async (req, res) => {
  const promiseDB = [];

  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimonial.findAll({ limit: 3 }));

  try {
    // Resolver todas las promesas que estan dentro del arreglo promiseDB
    const resultado = await Promise.all(promiseDB); // resultado es un arreglo con los resultados de las promesas

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Viajes",
    viajes,
  });
};

const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();

    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaViajeDetalles = async (req, res) => {
  const { slug } = req.params;

  try {
    // where: { slug: slug } es lo mismo que where: { slug }
    const viaje = await Viaje.findOne({ where: { slug } });

    res.render("viaje", {
      pagina: "Informacion Viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaViajeDetalles,
};
