const bd = require("./bd");

const create = (tableName, obj) => bd(tableName).insert(obj);

const modify = (tableName, conditions, obj) =>
  bd(tableName).where(conditions).update(obj);

module.exports = { create, modify };
