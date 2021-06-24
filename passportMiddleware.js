const spConfig = require('./sp-config')
const passport = require('passport')
const SamlStrategy = require('passport-saml').Strategy
const fs = require('fs')
const logger = require('./logger')

const decryptionPvk = fs.readFileSync('./test.key').toString()

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user,done) => {
    done(null, user)
})

const strategy = new SamlStrategy(
    {
        callbackUrl: spConfig.callbackUrl,
        entryPoint: spConfig.options.entryPoint,
        issuer: spConfig.options.issuer,
        authnRequestBinding: spConfig.options.authnRequestBinding,
        skipRequestCompression: spConfig.options.skipRequestCompression,
        cert: spConfig.options.cert,
        decryptionPvk: decryptionPvk,
        identifierFormat: spConfig.options.identifierFormat
    },
    (profile, done) => {
        logger.info(`profile is: ${profile} `)
        return done(null, profile)
    }
    )

const decryptionCert = fs.readFileSync('./test.crt').toString()


passport.use(strategy)
const metadata = strategy.generateServiceProviderMetadata(decryptionCert)

module.exports = { passport, metadata }