import express from 'express'
import router from './app/routes'

const app = express()
const {
  NODE_PORT,
} = require('./config')

const nodePort = NODE_PORT || 4000

app.use('/api', router)

app.listen(nodePort, () => {
  console.log(`App listening on port ${nodePort}`)
})

