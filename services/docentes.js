const { create, createImgs } = require("./../models/docentes");
const { imgFile } = require("./../utils/fileHandler");

/*  PARA CUANDO TENEMOS QUE SUBIR MÁS DE UN ARCHIVO USAMOS MAP
const createDocente = async (body, files) => {
  try {
    const [idDocente] = await create(body);
    const results = files.map((file) => {
      const uid = imgFile(files);
      const obj = {
        idDocente,
        uid,
      };
      createImgs(obj);
    });
    await Promise.all(results);
  } catch (error) {}
};
*/

const createDocente = async (body, files) => {
  try {
    const [idDocente] = await create(body);
    const result = files.map((file) => {});
    const uid = imgFile(files);
    const obj = {
      idDocente,
      uid,
    };
    const [idImagen] = await createImgs(obj);
    return idImagen;
  } catch (error) {
    throw e;
  }
};

module.exports = { createDocente };
