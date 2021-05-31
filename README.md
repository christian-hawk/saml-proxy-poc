# Single SP and Metadata for Multiple SPs/IDPs

## Proof of Concept Details

### Goal
Achieve a POC registering and logging in using 3 different IDPs using POST for SSO, publish a single SP metadata, using passport-saml.

### SP Initiated SSO POST POST
![SP Initiated POST POST SSO ](/docs/img/sp-initiated-post-post.png)

### Metadata
Comparisson of current gluu-passport with the new concept
![gluu passport metadata comparison](/docs/img/passport-metadata.png)

## Challanges
See [gluu-passport issue #58](https://github.com/GluuFederation/gluu-passport/issues/58)
- Handle internal logic on SAML SSO

## Specs

### IDP
Initialy we gonna use gluu-server's shibboleth IDP

### How
- Skip TDD to improve speed
- Use a single ACS 
- Use MultiSaml strategy from passport-saml
- Use issuer to find provider configurations


### 