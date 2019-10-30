const multer = require('multer');
const path = require('path');
module.exports = {
    storage: multer.diskStorage({
        // separando as partes do caminho em virgula para chegar na pasta de Uploads 
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            // tirando a extensão do nome da imagem
            const name = path.basename(file.originalname, ext);
            // garantindo que cada imagem é única
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};