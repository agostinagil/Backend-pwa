const Joi = require("@hapi/joi");

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(2).max(30).required(),
    apellido: Joi.string().optional(),
    mail: Joi.string().email().required(),
    telefono: Joi.string().required(),
  }),

  modify: Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(2).max(30).optional(),
    apellido: Joi.string().optional(),
    mail: Joi.string().email().optional(),
    telefono: Joi.string().optional(),
  }),
};

module.exports = { schemas };
