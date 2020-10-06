const bd = require("./../utils/bd");
const t = require("./../utils/schemas");

const authenticate = (usuario, password) =>
  bd(`${t.USUARIOS}`)
    .where({ usuario, password })
    .select("id", "usuario", "habilitado");

module.exports = { authenticate };
