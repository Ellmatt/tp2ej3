import Color from "../models/colores";

export const listarColor = async (req, res) => {
  try {
    const listaColor = await Color.find();
    res.status(200).json(listaColor);
  } catch (error) {
    console.log(error);
  }
};

export const crearColor = async (req, res) => {
  try {
    console.log(req.body);
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({
      mensaje: "El color se agrego correctamente",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "El color no se pudo agregar",
    });
    console.log(error);
  }
};

export const obtenerColor = async (req, res) => {
  try {
    console.log(req.body);
    const colorBuscado = await Color.findById(req.params.id);
    res.status(201).json(colorBuscado);
  } catch (error) {
    res.status(404).json({
      mensaje: "Error no se encontro el color buscado",
    });
    console.log(error);
  }
};
export const editarColor = async (req, res) => {
  try {
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El color se edito satisfactoriamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error no se pudo editar el color deseado",
    });
    console.log(error);
  }
};
export const borrarColor = async (req, res) => {
  try {
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El color se elimino satisfactoriamente",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error no se pudo borrar el color deseado",
    });
    console.log(error);
  }
};
