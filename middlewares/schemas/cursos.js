const Joi = require("@hapi/joi");

const schemas = {
  create: Joi.object().keys({
    idCategoria: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(2).max(30).required(),
  }),
  modify: Joi.object().keys({
    id: Joi.number().positive().integer().required(),
    idCategoria: Joi.number().positive().integer().optional(),
    nombre: Joi.string().min(2).max(30).optional(),
  }),
};

module.exports = { schemas };
