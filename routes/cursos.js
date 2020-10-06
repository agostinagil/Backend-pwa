const express = require("express");
const router = express.Router();
const service = require("./../models/cursos");
const { validateCreate, validateModify } = require("./../middlewares/cursos");

//todos los cursos
const all = (req, res) =>
  service
    .all()
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

//Un curso
const single = (req, res) =>
  service
    .single(req.params.id)
    .then(([response]) => res.json(response))
    .catch((error) => res.status(500).json(error));

//Alta curso
const alta = (req, res) =>
  service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

//Modificar curso
const modificar = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

//verbos http
router.get("/single/:id", single);
router.put("/modify/:id", validateModify, modificar);
router.post("/alta", validateCreate, alta);
router.get("/all", all);
module.exports = router;
