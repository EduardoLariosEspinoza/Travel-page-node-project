import express, { Router } from "express";
import {
  paginaInicio,
  paginaViajes,
  paginaNosotros,
  paginaTestimoniales,
  paginaViajeDetalles,
} from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

// Cuando el usuario entre a la ruta inicial. req: request, lo que tu envias al servidor, res: response, lo que el servidor responde
router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaViajeDetalles);

router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);

export default router;
