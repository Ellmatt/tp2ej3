import { Router } from "express";
import { borrarColor, crearColor, editarColor, listarColor, obtenerColor } from "../components/colores.controllers";


const router=Router()

router.route('/colores')
.get(listarColor)
.post(crearColor)

router.route('/colores/:id')
.get(obtenerColor)
.put(editarColor)
.delete(borrarColor)


export default router