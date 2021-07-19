module.exports = (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            if (!req.user.user_role.find(x => x.user_role_is_default == 1)) {
                req.logOut();
                return res.redirect('/auth/login');
            }
            if (!req.user.role.default) {
                req.logOut();
                return res.redirect('/auth/login');
            }
            return res.redirect(`${req.user.role.default.pa_url_pattern}`);
        }
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).send(err.message);
    }
};