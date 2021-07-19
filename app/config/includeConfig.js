module.exports = (filename, dirname) => {
    const fs = require('fs');
    const path = require('path');
    const basename = path.basename(filename);

    const obj = {};

    fs
        .readdirSync(dirname)
        .filter(file => {
            return ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js') || file !== basename);
        })
        .forEach(file => {
            let name_app = file.split('.js')[0];
            obj[name_app] = require(`${dirname}/${name_app}`);
        });

    return obj;
};