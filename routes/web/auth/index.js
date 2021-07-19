const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts');

const layout = 'layouts/web/auth/index';

router.use(expressLayouts);
router.use((req, res, next) => {
  res.locals.username = req.session.username ? req.session.username: "";
  req.session.username = req.body.username ? req.body.username : "";
  res.locals.auth_error = req.session.flash ? req.session.flash.error : "";
  res.locals.layout = layout;
  req.app.set('layout' , true);
  next();
});

includeRoutes(router, __filename, __dirname);

router.get('/*', (req, res) => res.redirect('/auth/login'));
router.use((req, res, next) => {
  req.app.set('layout' , false);
  next();
});

module.exports = router;