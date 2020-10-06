const express = require("express");
const router = express.Router();
const service = require("./../models/cursadas");
const { validateCreate, validateModify } = require("./../middlewares/cursadas");

const create = (req, res) =>
  service
    .create(req.body)
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

const all = (req, res) =>
  service
    .all()
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

const single = (req, res) =>
  service
    .single(req.params.id)
    .then(([r]) => res.json(r))
    .catch((e) => res.status(500).json(e));

const modificar = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));
router.get("/all", all);
router.put("/modify/:id", validateModify, modificar);
router.get("/single/:id", single);
router.post("/create", validateCreate, create);

module.exports = router;
