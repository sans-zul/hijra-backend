const express = require('express');
const router = express.Router();

router.post("/", 
    api.isAdminMiddleware,
    api.cekExistEmailMiddleware,
    auth.register.controller
);

module.exports = router;