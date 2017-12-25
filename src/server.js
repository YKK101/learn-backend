import express from 'express'

const app = express()
const {
  NODE_PORT,
} = require('./config')

const nodePort = NODE_PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(nodePort, () => {
  console.log(`App listening on port ${nodePort}`)
})

