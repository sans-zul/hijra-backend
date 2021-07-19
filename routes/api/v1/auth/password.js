const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

router.patch("/",
    api.isAdminMiddleware,
    api.getUserFromTokenMiddleware,
    auth.password.controller
);

module.exports = router;