module.exports = (req, res, next) => {

    // return res.send(require("jsonwebtoken").verify(req.header("x-access-token").replace("Bearer ", ""), secret_key));
    req.isAdmin = false;
    if (req.header("x-access-token")) {
        req.isAdmin = true;
    }
    next();
};