const fs = require("fs");
const publicKey = fs.readFileSync("./keys/public.pem");
const jwt = require("jsonwebtoken");

const secured = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { id } = jwt.verify(authorization, publicKey);
    req.id =id;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
    //Res 401
  }
};

module.exports = { secured };
