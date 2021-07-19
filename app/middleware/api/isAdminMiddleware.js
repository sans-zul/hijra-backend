
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    
    if (req.isAdmin || req.isAdmin == undefined) {
        return cek_admin(req, res, next);
    }
    next();
    
};

function cek_admin(req, res, next) {

    if (!req.header("x-access-token")) {
        return res.send(errorResponse("Unauthorized : Admin is Not Authorized", code_http.UNAUTHORIZED));
    }

    let token = req.header("x-access-token").replace("Bearer ", "");
    let admin = {};

    try {
        admin = jwt.verify(token, secret_key)["admin"];
        if (!admin) {
            return res.send(errorResponse("Unauthorized : Admin is Not Authorized", code_http.UNAUTHORIZED));
        }
        if (!admin.group) {
            return res.send(errorResponse("Unauthorized : Admin is Not Authorized", code_http.UNAUTHORIZED));
        }
        if (!(admin.group.id == 4)) {
            return res.send(errorResponse("Unauthorized : Admin is Not Authorized", code_http.UNAUTHORIZED));
        }
        return next();
    } catch (err) {
        console.log(err);
        return res.send(errorResponse(err.message, code_http.ERROR_SERVER));
    }
}