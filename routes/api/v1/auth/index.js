const express = require('express');
const router = express.Router();

includeRoutes(router, __filename, __dirname);
router.all('/', async (req, res, next) => {
  res.send(errorResponse("Not Found", code_http.NOT_FOUND));
});

router.all('/*', (req, res) => res.redirect('/api/v1/auth')); 

module.exports = router;