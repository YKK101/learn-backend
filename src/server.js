import express from 'express'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'
import router from './app/routes'

const app = express()
const {
  NODE_PORT,
} = require('./config')

const nodePort = NODE_PORT || 4000

app.use(bodyParser.urlencoded())
app.use(expressValidator())
app.use('/', router)

app.listen(nodePort, () => {
  console.log(`App listening on port ${nodePort}`)
})

