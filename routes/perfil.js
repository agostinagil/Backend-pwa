const express = require("express");
const router = express.Router();

const getProfile = (req, res) => {
  console.log("entre al perfil");
  console.log("El id del usuuario identificado es:", req.id);
  res.json({ message: "Welcome" });
};

router.get("/", getProfile);

module.exports = router;
