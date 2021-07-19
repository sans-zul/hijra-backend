const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    if (!req.api) {
        return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
    }

    if (!req.api.user) {
        return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
    }

    if (!req.file) {
        return res.send(errorResponse("File Profile Image Not Found", code_http.BAD_REQUEST));
    }

    let data = req.api.user;
    
    let user = await hijra_db.hijra_user.findByPk(data.id);
    if (!user) {
        return res.send(errorResponse("Account Not Registered", code_http.UNAUTHORIZED));
    }
    
    if (user.image != "default.jpg") {
        deleteFileUserProfile(user.image);
    }

    await hijra_db.hijra_user.update({
        id : user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        image: req.file.filename,
        bio: user.bio,
        tanggal_lahir: new Date(user.tanggal_lahir),
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
};