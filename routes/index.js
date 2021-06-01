var express = require('express');
var router = express.Router();
const passport = require('../passportMiddleware')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/protected-content', (req, res, next) => {
  res.json({
    'status': 'OK',
    'message': 'this is a very protected content!'
  })
})

router.get(
  "/login",
  passport.authenticate("saml", { failureRedirect: "/", failureFlash: true }),
  function (req, res) {
    res.redirect("/");
  }
);
module.exports = router;
