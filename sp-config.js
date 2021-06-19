export const spConfig = {
    "id": "saml-default",
    "displayName": "saml-default",
    "type": "saml",
    "mapping": "saml_ldap_profile",
    "passportStrategyId": "passport-saml",
    "enabled": true,
    "callbackUrl": "https://t1.techno24x7.com/passport/auth/saml/saml-default/callback",
    "requestForEmail": false,
    "emailLinkingSafe": false,
    "options": {
      "skipRequestCompression": "true",
      "authnRequestBinding": "HTTP-POST",
      "identifierFormat": "urn:oasis:names:tc:SAML:2.0:nameid-format:transient",
      "cert": "MIIDfzCCAmcCFGa+JH4OkI/IW+fXfRgu/RmV7TTbMA0GCSqGSIb3DQEBCwUAMHwxCzAJBgNVBAYTAkJSMQswCQYDVQQIDAJUWDEPMA0GA1UEBwwGQXVzdGluMRQwEgYDVQQKDAtHbHV1IFRlc3RpbjEaMBgGA1UEAwwRdDMudGVjaG5vMjR4Ny5jb20xHTAbBgkqhkiG9w0BCQEWDmNocmlzQGdsdXUub3JnMB4XDTIxMDYxNTIyMDM0MloXDTIyMDYxNTIyMDM0MlowfDELMAkGA1UEBhMCQlIxCzAJBgNVBAgMAlRYMQ8wDQYDVQQHDAZBdXN0aW4xFDASBgNVBAoMC0dsdXUgVGVzdGluMRowGAYDVQQDDBF0My50ZWNobm8yNHg3LmNvbTEdMBsGCSqGSIb3DQEJARYOY2hyaXNAZ2x1dS5vcmcwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDRqoUIc+zPStKWOOmm/wsjvtBbDQuYFmAEjoEBOeS1lxuWAZGZbwxmDUJIwLoUX2tojY98ae3XvdTjmbPK75P39IVakrJck4KlAlcANcDbqc5efnNU3wtP429cdZEreZBkCbBpeTlVEeC66TxPpseu5Y+aopTQg+hbP8NeH1BFEguPZJPyqe7H8s2SdubeVO6w5X2rN5UkyqU8oCcLatBfQ7wqY7fKvBmwLU9FSjkR1jYw3yo4UIcnA2yt7GXD7v0TlAs45LJ9C2cA7CVfN4SoOKs0Z45unBkNsMUNUrfSflBPr44ihOq622Muptyt2hZCJKh0ElLogBFMSptuBT5hAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAGWheQS6AsxDkJ0LJ/SI5VMF1GkZsGWCgd+qEdYGGqP05LMYEgCsNQW0tFziDdNbVF4yjSIoa6bR6K/CHHvmPzfY03qRAMrjd6ZGR0NuFWhzDqSgBTj8VlUaWqYNu5ELBgKQVPbeg6VUnNHk7OQZuyaf7ZmqgQjXixVTlthdnw+vcbZAypDwc86QN6B4RoUaGUBGFCzUAGfTWHt6aqs+xa5Ilh5fraiaRZbJZjblV8Lh4tvODQlXXlG5Ig1t/aYDhJLcezzjm1lf526I8FXulXJgAsWgfERU72XmJ7C88mNwDij9xjZgMEXreyznGtliVqXXiuiq0X0YxgP6M97PLWY=",
      "entryPoint": "https://t3.techno24x7.com/idp/profile/SAML2/POST/SSO",
      "issuer": "urn:test:default"
    }
  }
  