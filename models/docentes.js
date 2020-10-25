const bd = require("./../utils/bd");
const t = require("./../utils/schemas");
const dbService = require("../utils/dbService");

const getAll = () =>
  bd(`${t.DOCENTES}`).where({ habilitado: true }).select("*");

const getSingle = (id) =>
  bd(`${t.DOCENTES}`).where({ id }).select("nombre", "apellido", "CUIT");

const create = (obj) => dbService.create(`${t.DOCENTES}`, obj);

const modify = (id, obj) => bdService.modify(`${t.DOCENTES}`, { id }, obj);
module.exports = { getAll, getSingle, create, modify };
