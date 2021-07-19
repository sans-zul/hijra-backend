const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.send(sayHelloFunction("Sanjari"));
});

includeRoutes(router, __filename, __dirname);

module.exports = router;