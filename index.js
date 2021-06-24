const app = require('./app')
const https = require('https')
const config = require('config')
const logger = require('./logger')
const fs = require('fs')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'


const port = config.get('server.port')
logger.info(`setting app port ${port}`)
app.set('port', port)

const options = {
    key: fs.readFileSync('ssl/privkey.pem'),
    cert: fs.readFileSync('ssl/fullchain.pem'),
    ca: fs.readFileSync('ssl/chain.pem')
}

const server = https.createServer(options, app)

server.listen(port, () => {
    logger.info('server started...')
})
