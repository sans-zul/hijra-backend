module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.role.default) {
            return next();
        }
        return res.redirect('/unauthorized.htm');
    }
    res.redirect("/auth/login");
};