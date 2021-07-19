const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    let body = req.body;
    let password = body.password;
    try {
        
        let hijra_account = await hijra_db.hijra_account.findByPk(req.api.user_id);
        if (!hijra_account) {
            delete req.isAdmin;
            return res.send(errorResponse("Email or Account Not Found", code_http.UNAUTHORIZED));
        }
        
        hijra_account.password = hijra_account.password_email;
        if (!comparePasswordFunction(password, hijra_account)) {
            delete req.isAdmin;
            return res.send(errorResponse("Not Authorized", code_http.UNAUTHORIZED));
        }

        let user = await hijra_db.hijra_user.findByPk(hijra_account.user_id);
        let data = {
            id : user.id,
            name : user.name,
            email : user.email,
            image : user.image
        };
        
        let response = userHijraResponse(false, data, code_http.SUCCESS, "Berhasil Login");
        let token = jwt.sign({user : response.data.user}, secret_key);
        response.data.token = `Bearer ${token}`;

        delete req.isAdmin;
        return res.json(response);
    } catch (err) {
        console.log(err);
        return res.send(errorResponse(err.message, 500));
    }
    
};