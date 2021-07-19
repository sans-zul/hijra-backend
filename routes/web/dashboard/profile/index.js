const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  let data = {};
  res.render('web/dashboard/profile', data, (err, html) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    return res.send(html);
  });
});

module.exports = router;