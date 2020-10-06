const { response } = require("express");
const express = require("express");
const { modify } = require("../utils/bd");
const router = express.Router();
const service = require("./../models/personas");
const { validateCreate, validateModify } = require("./../middlewares/personas");

//mostrar todas las personas
const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

//mostrar una persona
/* en one liner:
const single = (req,res)=> service.getSingle(req.params.id).then(([response])=>res.json(response)).catch((e)=> res.status(500).json(e)); */
const single = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await service.getSingle(id);
    res.json(result);
  } catch (e) {
    res.status(500).json(e);
  }
};

//dar de alta a una persona
const crear = (req, res) => {
  /* con destructuring: (desp tendria que pasarle el service.create(obj))
    const {nombre, apellido...} = req.body;
    const obj = {nombre,apellido...} 
    const obj = ({ nombre, apellido, mail, telefono } = req.params);
  */
  service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.json(e));
};

//modificar una persona
const modificar = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

router.get("/single/:id", single);
router.put("/modify/:id", validateModify, modificar);
router.post("/create", validateCreate, crear);
router.get("/all", all);
module.exports = router;
