const fs = require("fs");
const AWS = require("aws-sdk");

const S3 = new AWS.S3({
  accessKeyId: "aca va la clave de acceso que generamos",
  secretAccessKey: "secret access aws",
});

const upload = (file, mimetype) => {
  try {
    const body = fs.readFileSync(`./public/images/${file}`);
    const params = {
      Bucket: "nombre del bucket unico a donde queremos subir el archivo",
      key: file,
      body,
      contentType: mimetype,
      ACL: "public-read",
    };
    S3.putObject(params, (error, response) => {
      if (error) throw error;
    });
    fs.unlink(`./public/images/${file}`, (e) => {
      throw e;
    });
  } catch (error) {
    throw e;
  }
};
