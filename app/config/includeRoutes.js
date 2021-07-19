module.exports = (router, filename, dirname) => {
    const fs = require('fs');
    const path = require('path');
    const basename = path.basename(filename);

    fs
        .readdirSync(dirname)
        .filter(file => {
            return ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js') || file !== basename);
        })
        .forEach(file => {
            let name_app = file.split('.js')[0];
            router.use(`/${name_app}`, require(`${dirname}/${name_app}`));
        });
};