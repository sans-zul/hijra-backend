const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if (!req.api) {
        return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
    }

    if (!req.api.user) {
        return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
    }

    let data = req.api.user;
    
    let response = userHijraResponse(true, data, code_http.SUCCESS, "Data User");
    let token = jwt.sign({user : response.data.user}, secret_key);
    response.data.token = `Bearer ${token}`;
    
    return res.json(response);
};