const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  let locals = res.locals;
  delete locals.base_url_template;
  res.send(locals);
});

includeRoutes(router, __filename, __dirname);

module.exports = router;