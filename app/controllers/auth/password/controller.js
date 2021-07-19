const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    let body = req.body;
    if (!req.api) {
        return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
    }

    if (!req.api.user) {
        return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
    }

    if (!body.old_password) {
        return res.send(errorResponse("Old Password Is Required", code_http.BAD_REQUEST));
    }

    if (!body.new_password) {
        return res.send(errorResponse("New Password Is Required", code_http.BAD_REQUEST));
    }

    let user = req.api.user;

    try {

        let account = await hijra_db.hijra_account.findOne({
            where : {
                user_id : user.id
            }
        });

        if (!account) {
            return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
        }

        let data = {
            id : account.id,
            password : account.password_email
        }
        if (!comparePasswordFunction(body.old_password, data)) {
            return res.send(errorResponse("Old Password Doesn't Match", code_http.BAD_REQUEST));
        }

        let password = shaFunction(`${account.id}-${body.new_password}`);

        await hijra_db.hijra_account.update({
            id : account.id,
            email: account.email,
            password_email: password,
            password_google: account.password_google,
            password_facebook: account.password_facebook,
            user_id: user.id
        }, {
            where : {
                id : account.id
            }
        });
        
        let response = userHijraResponse(true, user, code_http.SUCCESS, "Data User");
        let token = jwt.sign({user : response.data.user}, secret_key);
        response.data.token = `Bearer ${token}`;

        return res.json(response);
    } catch (err) {
        console.log(err);
        return res.send(errorResponse(err.message, code_http.ERROR_SERVER));
    }
};