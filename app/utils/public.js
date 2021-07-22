require('dotenv').config();
module.exports = {
    base_url : process.env.BASE_URL,
    app_name : process.env.APP_NAME || 'Sanari',
    team : process.env.TEAM || 'SANJARI',
    db : {
        auth : require('./../../database/administrator/models')
    },
    code_http : {
        BAD_REQUEST : 400,
        UNAUTHORIZED : 401,
        NOT_FOUND : 404,

        SUCCESS : 200,
        ERROR_SERVER : 500
    },
    secret_key : process.env.SECRET || "2f9b4a6346e9a4a79a27d0b740df358e2e2af1b7"
};