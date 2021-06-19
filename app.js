const express = require('express')
const { passport, metadata } = require('./passportMiddleware')
const logger = require('./logger')
const spConfig = require('./sp-config')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize())
app.use(passport.session())

app.get('/sp/metadata', (req, res, next) => {
    res.status(200).set('Content-Type', 'text/xml').send(metadata)
})

app.get(
    '/protected-content',
    passport.authenticate('saml', { failureRedirect: "/", failureFlash: true }),
    (req, res, next) => {
    res.json({
      'status': 'OK',
      'message': 'this is a very protected content!'
    })
})

module.exports = app
