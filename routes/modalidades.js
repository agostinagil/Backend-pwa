const express = require("express");
const router = express.Router();
const service = require("./../models/modalidades");
const {
  validateCreate,
  validateModify,
} = require("./../middlewares/modalidades");

const all = (req, res) =>
  service
    .getAll()
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

const alta = (req, res) =>
  service
    .create(req.body)
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

const modificar = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((r) => res.json(r))
    .catch((e) => res.satus(500).json(e));

const single = (req, res) =>
  service
    .getSingle(req.params.id)
    .then(([response]) => res.json(response))
    .catch((e) => res.status(500).json(e));

router.put("/modify/:id", validateModify, modificar);
router.get("/single/:id", single);
router.post("/alta", validateCreate, alta);
router.get("/all", all);
module.exports = router;
