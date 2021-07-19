const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file);
        switch (file.fieldname) {
            case 'profile': {
                cb(null, __basedir + '/public/multimedia/user/profile');
                break;
            }
        }
    },
    filename: async function (req, file, cb) {
        cb(null, `${req.api.user.id}_${moment(new Date()).format("YYYYMMDDhhmmss")}.${file.mimetype.split('/')[1]}`);
    }
});

const upload = multer({
    storage: storage
});
module.exports = upload;