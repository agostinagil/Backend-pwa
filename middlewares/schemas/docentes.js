const Joi = require("@hapi/joi");

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(2).max(30).required(),
    apellido: Joi.string().min(2).max(30).required(),
    CUIT: Joi.number().positive().integer().required(),
  }),
  modify: Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(2).max(30).optional(),
    apellido: Joi.string().min(2).max(30).optional(),
    CUIT: Joi.number().positive().integer().optional(),
  }),
};

module.exports = { schemas };
