const bd = require("./../utils/bd");
const t = require("./../utils/schemas");
const dbService = require("../utils/dbService");

//todas las categorias
const getAll = () =>
  bd(`${t.CATEGORIAS} as cat`).where({ habilitado: 1 }).select("cat.nombre");

//una categoria
const getSingle = (id) =>
  bd(`${t.CATEGORIAS} as cat`)
    .join(`${t.CURSOS} as c`, "cat.id", "c.idCategoria")
    .where("cat.id", id)
    .select("cat.nombre as nombreCategoria", "c.nombre as nombreCurso");

const create = (obj) => bdService.create(`${t.CATEGORIAS}`, obj);

const modify = (id, obj) => bdService.modify(`${t.CATEGORIAS}`, { id }, obj);

module.exports = { getAll, create, getSingle, modify };
