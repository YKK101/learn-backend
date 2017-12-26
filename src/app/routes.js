import express from 'express'
import validate from 'express-validation'
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  removeProductById,
} from './controllers/products'
import { newProduct } from './validation/product'

const router = express.Router()

router.route('/products')
  .get(getAllProducts)
  .post(
    validate(newProduct),
    addProduct,
  )

router.route('/products/:id')
  .get(getProductById)
  .put(updateProductById)
  .delete(removeProductById)

router.use((err, req, res, next) => {
  if (err) {
    res.status(400).json({
      code: 400,
      message: 'Bad Request',
      description: 'Validation error',
      error: err.errors,
    })
  }
  next()
})

export default router
