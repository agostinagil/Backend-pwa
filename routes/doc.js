const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);
const service = require("./../services/docentes");

const create = (req, res) => {
  console.log(req);
  const result = service.createDocente(req.body, req.file);
};

router.post("/create", upload.single("imagen"), create);

module.exports = router;
