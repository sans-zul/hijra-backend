module.exports = async (req, res, next) => {

    if (req.header("x-access-token")) {

        let {email} = req.body;
        if (!email) {
            return res.send(errorResponse("Email or Username Is Required", code_http.BAD_REQUEST));
        }

        try {
            let user = await hijra_db.hijra_account.findOne({
                where : {
                    email
                }
            });

            if (user) {
                return res.send(errorResponse("Email or Account Is Exist", code_http.BAD_REQUEST));
            }
            return next();
        } catch (err) {
            console.log(err);
            return res.send(errorResponse(err.message, code_http.ERROR_SERVER));
        }
    }
    return res.send(errorResponse("Unauthorized : Admin is Not Authorized", code_http.UNAUTHORIZED));
    
};