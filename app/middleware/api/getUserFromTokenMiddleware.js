
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {

    if (!req.header("x-access-token")) {
        return res.send(errorResponse("Unauthorized : Admin is Not Authorized", code_http.UNAUTHORIZED));
    }
    let auth_header = req.headers.authorization;
    if (!auth_header) {
        return res.send(errorResponse("Authorization is Required", code_http.BAD_REQUEST));
    }
    let token = auth_header.replace("Bearer ", "");
    let user_token = {};

    try {
        user_token = jwt.verify(token, secret_key)["user"];
        let user = await hijra_db.hijra_user.findByPk(user_token.id);
        if (!user) {
            return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
        }
        req.api = {
            user
        };
        return next();
    } catch (err) {
        console.log(err);
        return res.send(errorResponse(err.message, code_http.ERROR_SERVER));
    }
        
};