const bd = require("./../utils/bd");
const T = require("./../utils/schemas");
const dbService = require("../utils/dbService");

const get = (conditions = true) =>
  bd(`${T.CURSADAS} as C`)
    .join(`${T.CURSOS} as CUR`, "C.cursoId", "CUR.Id")
    .join(`${T.MODALIDADES} as MOD`, "C.modalidadId", "MOD.id")
    .join(`${T.DOCENTES} as DOC`, "C.docenteId", "DOC.id")
    .join(`${T.CATEGORIAS} as CAT`, "CUR.idCategoria", "CAT.id")
    .where({ "C.habilitado": true, ...conditions })
    .select(
      "C.fecha_inicio",
      "C.fecha_fin",
      "C.horario",
      "C.precio",
      "CAT.nombre as nombreCategoria",
      "MOD.nombre as nombreModalidad",
      "DOC.nombre as nombreDocente",
      "DOC.apellido as apellidoDocente"
    );
const single = (id) => get({ "C.id": id });
const all = () => get();

const create = (obj) => bdService.create(`${t.CURSADAS}`, obj);

const modify = (id, obj) => bdService.modify(`${t.CURSADAS}`, { id }, obj);

module.exports = { create, all, single, modify };
