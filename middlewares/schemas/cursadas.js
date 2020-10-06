const Joi = require("@hapi/joi");
const schemaId = Joi.number().integer().positive().required();
const schemaIdMod = Joi.number().integer().positive().optional();

const schemas = {
  create: Joi.object().keys({
    cursoId: schemaId,
    modalidadId: schemaId,
    docenteId: schemaId,
    fecha_inicio: Joi.date().required(),
    fecha_fin: Joi.date().optional(),
    precio: Joi.number().required(),
    horario: Joi.string().required(),
  }),
  modify: Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    cursoId: schemaIdMod,
    modalidadId: schemaIdMod,
    docenteId: schemaIdMod,
    fecha_inicio: Joi.date().optional(),
    fecha_fin: Joi.date().optional(),
    precio: Joi.number().optional(),
    horario: Joi.string().optional(),
  }),
};

module.exports = { schemas };
