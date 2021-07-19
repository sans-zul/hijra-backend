
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        let body = req.body;
        
        if (!req.api) {
            return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
        }

        if (!req.api.user) {
            return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
        }

        let data = req.api.user;
    
        let user = await hijra_db.hijra_user.findByPk(data.id);
        if (!user) {
            return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
        }

        await hijra_db.hijra_user.update({
            id : user.id,
            name: body.name,
            email: body.email,
            phone: body.phone,
            gender: body.gender,
            image: user.image,
            bio: body.bio,
            tanggal_lahir: new Date(body.tanggal_lahir),
            followers: user.followers,
            following: user.following,
            post: user.post
        }, {
            where : {
                id : user.id
            }
        });

        data = await hijra_db.hijra_user.findByPk(user.id);
    
        let response = userHijraResponse(true, data, code_http.SUCCESS, "Data User");
        let token = jwt.sign({user : response.data.user}, secret_key);
        response.data.token = `Bearer ${token}`;
        
        return res.json(response);
    } catch (err) {
        console.log(err);
        return res.send(errorResponse(err.message, code_http.ERROR_SERVER));
    }
};