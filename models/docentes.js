const bd = require("./../utils/bd");

const create = (obj) => bd("docentes").insert(obj);

const createImgs = (obj) => bd("docente_imagenes").insert(obj);

module.exports = { create, createImgs };
