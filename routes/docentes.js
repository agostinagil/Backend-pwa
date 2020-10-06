const express = require("express");
const router = express.Router();
const service = require("./../models/docentes");

const single = (req, res) =>
  service
    .getSingle(req.params.id)
    .then(([resp]) => res.json(resp))
    .catch((e) => res.status(500).json(e));

const all = (req, res) =>
  service
    .getAll()
    .then((r) => res.json(r))
    .catch((e) => res.satus(500).json(e));

const alta = (req, res) =>
  service
    .create(req.body)
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

const modificar = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

router.get("/single/:id", single);
router.get("/all", all);
router.put("/modify/:id", modificar);
router.post("/alta", alta);
module.exports = router;
