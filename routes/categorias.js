const express = require("express");
const router = express.Router();
const service = require("./../models/categorias");
const {
  validateCreate,
  validateModify,
} = require("./../middlewares/categorias");

//ver todas las categorias
const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

//ver una categoria
const single = (req, res) =>
  service
    .getSingle(req.params.id)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

//alta categoria
const alta = (req, res) =>
  service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

//modificar categoria
const modificar = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));
//verbos http
router.put("/modify/:id", validateModify, modificar);
router.get("/single/:id", single);
router.post("/alta", validateCreate, alta);
router.get("/all", all);

module.exports = router;
