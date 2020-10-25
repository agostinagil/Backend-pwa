const bd = require("./../utils/bd");
const t = require("./../utils/schemas");
const { v4: uuid } = require("uuid");
const sha1 = require("sha1");
const { send } = require("./mail");

const create = async (obj) => {
  try {
    const { nombre, apellido, mail, telefono } = obj;
    const { usuario, password } = obj;
    const persona = { nombre, apellido, mail, telefono };
    const [idPersona] = await bd(`${t.PERSONAS}`).insert(persona);
    const confCorreo = uuid()
    const user = {
      usuario,
      password: sha1(password),
      idPersona,
      confirmacionCorreo: confCorreo,
    };
    const [idUsuario] = await bd(`${t.USUARIOS}`).insert(user);
    const html = `<a href= ${process.env.URL_CONFIRM} ${confCorreo}> Hace click para confirmar la cuenta </a>`
    const messageId = await send({
      to: mail,
      subject: "Gracias por registrarte",
      html
    });
    return messageId;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { create };
