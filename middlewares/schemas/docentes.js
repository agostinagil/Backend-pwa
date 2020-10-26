const Joi = require("@hapi/joi");

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(2).max(15).required(),
    apellido: Joi.string().min(2).max(15).required(),
    cuit: Joi.number().positive().integer().required(),
  }),
};

module.exports = { schemas };
