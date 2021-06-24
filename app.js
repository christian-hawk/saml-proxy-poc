const express = require('express')
const { passport, metadata } = require('./passportMiddleware')
const logger = require('./logger')
const spConfig = require('./sp-config')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const app = express()


app.use(express.json())
app.use(session({
  secret: 'my supersecret secret',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

//general error handler
app.use(function(err, req, res, next) {
  console.log("Fatal error: " + JSON.stringify(err));
  next(err);
});

app.get('/sp/metadata', (req, res, next) => {
    logger.debug('/sp/metadata endpoint called')
    res.status(200).set('Content-Type', 'text/xml').send(metadata)
})

app.get(
    '/protected-content',
    (req, res, next) => {
      if(req.isAuthenticated()) {
        res.status(200).set('Content-Type', 'text/html').send(new Buffer.from(
          '<h2>Test String</h2>'
          ))
      } else {
        res.redirect('/login')
      }
     
})

app.get(
  '/login',
  passport.authenticate('saml', { failureRedirect: "/sp/fail", failureFlash: true }),
  (req, res) => {
    res.redirect('/sp/success')
  }
)

app.post(
  '/sp/callback',
  express.urlencoded({ extended: false }),
  passport.authenticate('saml', { failureRedirect: "/sp/fail", failureFlash: true }),
  (req, res, next) => {
    logger.info('Authenticate successful')
    res.redirect('/sp/success')
  }
)

app.get(
  '/sp/success',
  // passport.authenticate('saml', { failureRedirect: "/sp/fail", failureFlash: true }),
  (req, res, next) => {
    res.status(200).set('Content-Type', 'text/html').send(new Buffer.from(
      '<h2>SUCCESS ENDPOINT</h2>' + 
      'Now you can access <a href="/protected-content">protected content</a>'
      ))
})

app.get(
  '/sp/fail',
  (req, res, next) => {
    res.json({
      'status': 'ERROR',
      'message': 'So sorry!'

    })
  }
)

module.exports = app
