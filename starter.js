const app = "app";
module.exports.public = () => {  
    global = Object.assign(global, require(`./${app}/utils/public`));
    global = Object.assign(global, require(`./${app}/config/index`));
    global = Object.assign(global, require(`./${app}/helpers/index`));
    global = Object.assign(global, require(`./${app}/response/index`));
    global = Object.assign(global, require(`./${app}/middleware/index`));
    global = Object.assign(global, require(`./${app}/controllers/index`));
    global.db = require("./database/administrator/models");
    global.hijra_db = require("./database/hijra/models");
};

module.exports.locals = (res) => {
    Object.assign(res.locals, require(`./${app}/utils/locals`));
};