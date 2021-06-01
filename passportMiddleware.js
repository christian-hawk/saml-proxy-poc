const passport = require('passport')
const SamlStrategy = require('passport-saml').Strategy

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user,done) => {
    done(null, user)
})

const strategy = new SamlStrategy(
    {
        callbackUrl: 'https://t1.christestenv.org/login/callback',
        entryPoint: 'https://p6.techno24x7.com/idp/profile/SAML2/POST/SSO',
        issuer: 'p6:techno24x7:com',
        authnRequestBinding: 'HTTP-POST',
        skipRequestCompression: true,
        cert: 'MIIDijCCAnICEwQZjF5XVEW9bhJyaY9wm9lYtLcwDQYJKoZIhvcNAQELBQAwgYExCzAJBgNVBAYTAkJSMQswCQYDVQQIDAJTUDESMBAGA1UEBwwJU2FvIFBhdWxvMRYwFAYDVQQKDA1HbHV1IFRlc3QgSW5jMRowGAYDVQQDDBFwNi50ZWNobm8yNHg3LmNvbTEdMBsGCSqGSIb3DQEJARYOY2hyaXNAZ2x1dS5vcmcwHhcNMjEwNTMxMjAwNDMxWhcNMjIwNTMxMjAwNDMxWjCBgTELMAkGA1UEBhMCQlIxCzAJBgNVBAgMAlNQMRIwEAYDVQQHDAlTYW8gUGF1bG8xFjAUBgNVBAoMDUdsdXUgVGVzdCBJbmMxGjAYBgNVBAMMEXA2LnRlY2hubzI0eDcuY29tMR0wGwYJKoZIhvcNAQkBFg5jaHJpc0BnbHV1Lm9yZzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOKh4IasERRi1nSavW7yyPflbDuYjMaJruoSsqFvRtTAHyeRx3dP9Su92+uK/yxLlVAfKzztm9ufsbc0dNoRHmeJPwdg5nro7T8daFfdLvb2dvgC2pQc5frL1LibobfrGpjm6c6AQDdxU1eTDtPVFfmQAFV//xV89BexllwX3EUw41OgVFnXAgxBx5/SEVWQy3jKSpcMbJvYNwSvzS+S+Tl4VAqS/+P9iZlA7R6SjT9wnj39JHnzgIsOxLsUGsgcm2jX82i9OACpWsmOKm/RL+fX64DP8ObPVC0xSg2BrVP5SK4mMxAqAvZxmC0ds39/IfjQ4AGDFejMKRpw8oKFM80CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEApUGN5HxABbZeCzhpL+sCVZG6SGawncTCoYUvxwxkWjZow0TFfaoupY+8IIknXdyxa/iJUYcgke1EzN1HiDqB+ObBNkMjG/NfqXEiAFfuxRnUor4aiaTIOh34QmyMFrUNplz09NTfiqppWBkCr3vlM1yobbhsooiRQ49V4Ubq7y8yNPIol4xShD/w0Mi4zDCIIubFDmX01hwEVq+WDTgoVMHzVk8vY6LURTxE3YMHA6DwfBhlFA81MAy2wdYN6wyaRUPwer7r7wso98wND8j0x4IyU06iQ44zoTlOY4+vPZaDZ6Zm9cnSNfAmPDPdFqvyNFzcculhlgoPH3v/+WwgAg==',
    },
    (profile, done) => {
        done(null, profile)
    }
    )

passport.use(strategy)
console.log(strategy.generateServiceProviderMetadata())

module.exports = passport;