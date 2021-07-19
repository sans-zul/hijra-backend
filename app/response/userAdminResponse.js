
const moment = require('moment');

module.exports = (user, code = 200, message = null) => {
    return {
        success : true,
        code,
        data : {
            admin : {
                id : user.id,
                name : user.name,
                tanggal_lahir : moment(new Date(user.tanggal_lahir)).format("YYYY-MM-DD"),
                gender : user.gender,
                image : `${base_url}/multimedia/user/${user.image}`,
                account : user.account,
                group : user.group
            }
        },
        message
    }
};