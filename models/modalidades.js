const bd = require("./../utils/bd");
const t = require("./../utils/schemas");
const dbService = require("../utils/dbService");

const getSingle = (id) =>
  bd(`${t.MODALIDADES} `).where({ id }).select("nombre", "descripcion");

const getAll = () =>
  bd(`${t.MODALIDADES}`).where({ habilitado: true }).select("*");

const create = (obj) => bdService.create(`${t.MODALIDADES}`, obj);

const modify = (id, obj) => bdService.modify(`${t.MODALIDADES}`, { id }, obj);
module.exports = { getSingle, getAll, create, modify };
