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
import { validationError } from './middlewares/error'

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

router.use(validationError)

export default router
