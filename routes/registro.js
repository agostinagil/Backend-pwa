const express = require("express");
const router = express.Router();
const service = require("./../services/users");
const { validateCreate } = require("./../middlewares/registro");

const create = (req, res) =>
  service
    .create(req.body)
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

router.post("/", validateCreate, create);

module.exports = router;
