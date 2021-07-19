const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    let auth_header = req.headers.authorization;

    if (!auth_header) {
        return res.send(errorResponse("Not Authorized", code_http.UNAUTHORIZED));
    }

    let auth = new Buffer.from(auth_header.split(' ')[1], 'base64').toString().split(':');
    let username = auth[0];
    let password = auth[1];

    if (username && password) {
        try {
            let account = await db.auth_account.findOne({
                where : {
                    username
                }
            });
            if (!account) {
                delete req.isAdmin;
                return res.send(errorResponse("Account Not Found", code_http.BAD_REQUEST));
            }

            if (!comparePasswordFunction(password, account)) {
                delete req.isAdmin;
                return res.send(errorResponse("Not Authorized", code_http.UNAUTHORIZED));
            }

            let user_role = await db.auth_user_role_n.findOne({
                where : {
                    account_id : account.id,
                    group_id : 4
                }
            });
            if (!user_role) {
                delete req.isAdmin;
                return res.send(errorResponse("Not Authorized", code_http.UNAUTHORIZED));
            };

            let user = await db.auth_user.findByPk(account.user_id);
            user.account = {
                id : account.id,
                username : account.username
            };
            user.group = {
                id : user_role.group_id,
                name : user_role.group_name
            };
            
            let response = userAdminResponse(user, code_http.SUCCESS);
            let token = jwt.sign({admin : response.data.admin}, secret_key);
            response.data.token = `Bearer ${token}`;

            delete req.isAdmin;
            return res.json(response);
        } catch (err) {
            console.log(err);
            delete req.isAdmin;
            return res.send(errorResponse(err.message, code_http.ERROR_SERVER));
        }
        
    }

};