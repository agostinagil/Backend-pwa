const Joi = require("@hapi/joi");

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    mail: Joi.string().email().required(),
    telefono: Joi.string().optional(),
    usuario: Joi.string().min(5).max(15).required(),
    password: Joi.string().required(),
  }),
};

module.exports = { schemas };
