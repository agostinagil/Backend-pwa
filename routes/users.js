const express = require("express");
const router = express.Router();
const service = require("./../models/users");

const confirm = (req, res) =>
  service
    .update({ obj: { habilitado: true }, confirmacionCorreo: req.params.uuid })
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

router.get("/confirm/:uuid", confirm);

module.exports = router;
