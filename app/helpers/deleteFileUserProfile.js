const fs = require('fs');
module.exports = (file) => {
    const path = `${__basedir}/public/multimedia/user/profile/${file}`;
    fs.unlink(path, (err) => {
        if (err) {
            console.log(err);
        }
    });
}