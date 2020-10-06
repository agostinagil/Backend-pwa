const { schemas } = require("./schemas/categorias");

const validateCreate = (req, res, next) => {
  const { error, value } = schemas.create.validate(req.body);
  error ? req.status(422).json({ error: error.details[0].message }) : next();
};
const validateModify = (req, res, next) => {
  const { error, value } = schemas.modify.validate(req.body);
  error ? req.status(422).json({ error: error.details[0].message }) : next();
};

module.exports = { validateModify, validateCreate };
