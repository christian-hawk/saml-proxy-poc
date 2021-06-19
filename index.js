const app = require('./app')
const https = require('http')
const config = require('config')
const logger = require('./logger')

const port = config.get('server.port')

logger.info(`setting app port ${port}`)
app.set('port', port)

const server = https.createServer(app)

server.listen(port, () => {
    logger.info('server started...')
})
