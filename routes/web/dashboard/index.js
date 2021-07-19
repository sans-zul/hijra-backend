const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts');

const layout = 'layouts/web/dashboard/index';

router.use(expressLayouts);
router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.layout = layout;
  req.app.set('layout' , true);
  next();
});
router.use(isAuthMiddleware);
router.use(verifyMiddleware);

router.get('/', async (req, res) => {
  let data = {};
  res.render('web/dashboard', data, (err, html) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    return res.send(html);
  });
});

includeRoutes(router, __filename, __dirname);
router.get('/*', (req, res) => res.redirect('/dashboard'));
router.use((req, res, next) => {
  req.app.set('layout' , false);
  next();
});

module.exports = router;