const express = require("express");
const router = express.Router();
const service = require("./../models/users");

const getProfile = (req, res) =>
  service
    .get(req.id)
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

router.get("/", getProfile);

module.exports = router;
