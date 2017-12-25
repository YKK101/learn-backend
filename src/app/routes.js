import express from 'express'
import { timeLogger } from './middlewares/timeLogger'

const router = express.Router()

router.use(timeLogger)

router.get('/:a.:b', (req, res) => {
  res.send(`get ${req.params.a} . ${req.params.b}`)
})

router.get('/:a-:b', (req, res) => {
  res.send(`get ${req.params.a} - ${req.params.b}`)
})

router.get('/:id', (req, res) => {
  res.send(`id = ${req.params.id}`)
})

export default router
