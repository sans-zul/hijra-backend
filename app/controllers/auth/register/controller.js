
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    let body = req.body;
    try {

        if (!body.email) {
            return res.send(errorResponse("Email or Username Is Required", code_http.BAD_REQUEST));
        }
    
        if (!body.name) {
            return res.send(errorResponse("Name Is Required", code_http.BAD_REQUEST));
        }
        
        if (!body.password) {
            return res.send(errorResponse("Password Is Required", code_http.BAD_REQUEST));
        }

        let user_id = 1;
        let last_user = await hijra_db.hijra_user.findOne({
            order : [
                ['id', 'DESC']
            ],
            paranoid : false
        });
        if (last_user) {
            user_id = last_user.id + 1; 
        }

        await hijra_db.hijra_user.create({
            id : user_id,
            name: body.name,
            email: body.email,
            phone: "",
            gender: "",
            image: "default.jpg",
            bio: "",
            tanggal_lahir: null,
            followers: 0,
            following: 0,
            post: 0
        });

        let id = 1;
        let last_account = await hijra_db.hijra_account.findOne({
            order : [
                ['id', 'DESC']
            ],
            paranoid : false
        });

        if (last_account) {
            id = last_account.id + 1;
        }

        let password = shaFunction(`${id}-${body.password}`);
        await hijra_db.hijra_account.create({
            id,
            email: body.email,
            password_email: password,
            password_google: "",
            password_facebook: "",
            user_id: user_id
        });
        
        let user = {
            id : user_id,
            name : body.name,
            email : body.email,
            image : "default.jpg"
        };
        
        let response = userHijraResponse(false, user, code_http.SUCCESS, "Pendaftaran Berhasil");
        let token = jwt.sign({user : response.data.user}, secret_key);
        response.data.token = `Bearer ${token}`;

        return res.json(response);

    } catch (err) {
        console.log(err);
        return res.send(errorResponse(err.message, code_http.ERROR_SERVER));
    }
};