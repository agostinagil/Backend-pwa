const bd = require("./../utils/bd");
const t = require("./../utils/schemas");
const bdService = require("../utils/dbService");

const getAll = () => bd(`${t.PERSONAS}`).select("*");

const getSingle = (id) =>
  bd(`${t.PERSONAS}`)
    .where({ id, habilitado: true })
    .select("id", "nombre", "apellido", "mail", "telefono");

const modify = (id, obj) => bdService.modify(`${t.PERSONAS}`, { id }, obj);

module.exports = { getAll, getSingle, modify };
