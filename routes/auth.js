const express = require("express");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sha1 = require("sha1");
const privateKey = fs.readFileSync("./keys/private.pem");
const service = require("./../models/auth");
const signOptions = { algorithm: "RS256", expiresIn: "1h" };

const createToken = (payload) => jwt.sign(payload, privateKey, signOptions);

const auth = async (req, res) => {
  try {
    const { usuario, password } = req.body;
    const [user] = await service.authenticate(usuario, sha1(password));
    console.log(user);
    if (!user) res.sendStatus(401);
    if (!user.habilitado)
      res.sendStatus(401).json({ message: "confirma tu cuenta" });
    if (user.habilitado) {
      const token = createToken({ id: user.id });
      res.json({ JWT: token, info: { usuario, nickname: "frantuko" } });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

router.post("/", auth);

module.exports = router;
