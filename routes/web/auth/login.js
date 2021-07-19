const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get("/",
  isUnAuthMiddleware,
  async (req, res) => {
    let data = {
      title : "Login",
      action : '/auth/login'
    };
    res.render("web/auth/login", data, (err, html) => {
      if (err) {
        console.log(err);
      }
      res.send(html);
    });
  }
);

router.post("/",
  isUnAuthMiddleware,
  (req, res, next) => {
    req.session.db = {};
    next();
  },
  passport.authenticate('local', { failureRedirect: '/auth/login', failureFlash: true }),
  async (req, res, next) => {
    delete req.session.username;
    let role_default = req.user.role.default;
    if (role_default) {
      return res.redirect(`${role_default.pa_url_pattern}`);
    }
    return res.redirect('/auth/login');
  }
);

module.exports = router;