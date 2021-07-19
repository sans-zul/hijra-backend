module.exports = (req, res, next) => {

    if (req.header("x-access-token")) {
        return auth.login.userLoginController(req, res, next);
    }
    auth.login.adminLoginController(req, res, next);
};