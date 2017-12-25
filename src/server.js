import express from 'express'

const app = express()
const {
  NODE_PORT,
} = require('./config')

const nodePort = NODE_PORT || 4000

app.route('/example')
  .get((req, res) => {
    res.send('get example')
  })
  .post((req, res) => {
    res.send('post to example')
  })

app.get('/:a.:b', (req, res) => {
  res.send(`get ${req.params.a} . ${req.params.b}`)
})

app.get('/:a-:b', (req, res) => {
  res.send(`get ${req.params.a} - ${req.params.b}`)
})

app.get('/:id', (req, res) => {
  res.send(`id = ${req.params.id}`)
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(nodePort, () => {
  console.log(`App listening on port ${nodePort}`)
})

