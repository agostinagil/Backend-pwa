const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);
const service = require("../services/docentes");
const { validateCreate } = require("./../middlewares/docentes");

const create = (req, res) => {
  try {
    const result = service.createDocente(req.body, req.file);
    res.json({ result });
  } catch (error) {
    res.sendStatus(500);
  }
};

router.post("/create", upload.single("imagen"), validateCreate, create);

module.exports = router;
