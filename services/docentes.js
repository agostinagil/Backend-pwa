const model = require("./../models/doc");
const {imgFile} = require("./../utils/fileHandler");

const createDocente = async (bodyObj, fileObj) => {
    try {
        const [ idDocente ] = await model.create( bodyObj );
        const uidImage = imgFile(fileObj);
        console.log( "Uid de imagen: ", uidImage)
    } catch (error) {
        
    }

}

module.exports = {createDocente}