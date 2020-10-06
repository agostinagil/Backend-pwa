const bd = require("./../utils/bd");
const t = require("./../utils/schemas");
const dbService = require("../utils/dbService");

const get = (conditions = true) =>
  bd(`${t.CURSOS} as c`)
    .join(`${t.CATEGORIAS} as cat`, "c.idCategoria", "cat.id")
    .where({ "c.habilitado": true, ...conditions })
    .select(" c.nombre", "cat.nombre as Categoria");

const single = (id) => get({ "c.id": id });
const all = () => get();
const create = (obj) => bdService.create(`${t.CURSOS}`, obj);

const modify = (id, obj) => bdService.modify(`${t.CURSOS}`, { id }, obj);

module.exports = { single, all, create, modify };
