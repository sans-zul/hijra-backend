const express = require('express');
const router = express.Router();

// get profile
router.get("/", 
    api.isAdminMiddleware,
    api.getUserFromTokenMiddleware,
    user.profile.getController
);

// edit profile
router.put("/",
    api.isAdminMiddleware,
    api.getUserFromTokenMiddleware,
    user.profile.putController
);

// edit image profile
router.post("/",
    api.isAdminMiddleware,
    api.getUserFromTokenMiddleware,
    (req, res, next) => {
        multer.user.profile.single('profile')(req, res, (err) => {
            if (err) {
                console.log(err);
                return res.send(errorResponse(err.message, code_http.ERROR_SERVER));
            }
            next();
        });
    },
    user.profile.postController
);

module.exports = router;