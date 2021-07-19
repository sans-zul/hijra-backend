const express = require('express');
const router = express.Router();

router.post("/", 
    api.validateAuthMiddleware, 
    api.isAdminMiddleware,
    api.getEmailMiddleware,
    auth.login.controller
);

module.exports = router;