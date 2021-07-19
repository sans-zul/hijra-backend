const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  let data = {
    title : 'Register'
  };
  res.render('web/auth/register', data, (err, html) => {
    if (err) {
      console.log(err);
    }
    res.send(html);
  });
});

module.exports = router;