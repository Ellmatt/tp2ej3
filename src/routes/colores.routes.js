import { Router } from "express";
import { crearColor, editarColor, listarColor, obtenerColor } from "../components/colores.controllers";


const router=Router()

router.route('/colores')
.get(listarColor)
.post(crearColor)

router.route('/colores/:id')
.get(obtenerColor)
.put(editarColor)
.delete


export default router