const bd = require("./../utils/bd");
const t = require("./../utils/schemas");

const get = (id) =>
  bd(`${t.PERSONAS} as per`)
    .join(`${t.USUARIOS}as usr`, "per.id", "usr.idPersona")
    .where("usr.id", id)
    .andWhere("usr.habilitado", true)
    .select("usuario", "nombre", "apellido", "mail", "telefono");

const update = ({ id = false, obj, confirmacionCorreo = {} }) =>
  bd(`${t.USUARIOS}`).where({ id }).orWhere({ confirmacionCorreo }).update(obj);

module.exports = { get, update };
