function find_profile(req, roles) {
    let profile = roles.find(x => x.pa_p_modul_prefix == "profile");
    let logout = roles.find(x => x.pa_p_modul_prefix == "logout");
    req.user.my = {
        profile,
        logout
    }
}

module.exports = (req, res, next) => {
    try {
        let originalUrl = req.originalUrl;
        let app = originalUrl.split("?")[0].split("/")[1];
        let list_role = req.user.role.list;
        let roles = list_role.filter(x => x.pa_p_application_prefix == app && x.pa_p_metode == req.method);
        if (roles) {
            originalUrl = originalUrl.replace(`/${app}`, "");
            if (!originalUrl) {
                let role = roles.find(x => x.pa_p_modul_prefix == originalUrl);
                if (role) {
                    req.user.role.active = role;
                    res.locals.title = role.pa_p_title;
                    find_profile(req, list_role.filter(x => x.group_id == role.group_id));
                    return next();
                }
                return res.redirect("/unauthorized.htm");
                // return res.redirect(req.user.role.default.pa_url_pattern);
            }
            roles = roles.filter(x => x.pa_p_modul_prefix != "");
            let meet = false;
            let role = {};
            for (let i = 0; i < roles.length; i++) {
                let search_url = originalUrl.search(roles[i].pa_p_modul_url_pattern);
                if (search_url == 0) {
                    let replace_url = originalUrl.replace(`${roles[i].pa_p_modul_url_pattern}`, "");
                    if (replace_url.split("/")[0] == "" && replace_url == "") {
                        role = roles[i];
                        meet = true;
                        originalUrl = originalUrl.replace(`${roles[i].pa_p_modul_url_pattern}`, "");
                        break;
                    }
                }
            }
            if (!meet) {
                return res.redirect("/unauthorized.htm");
            }
            req.user.role.active = role;
            res.locals.title = role.pa_p_title;
            find_profile(req, list_role.filter(x => x.group_id == role.group_id));
            return next();
        }
        req.logOut();
        return res.redirect("/auth/login");
    } catch (error) {
        next(error);
    }
    
};