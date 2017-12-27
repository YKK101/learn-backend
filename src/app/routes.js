import express from 'express'
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  removeProductById,
} from './controllers/products'
import {
  validateNewProduct,
  validateUpdateProduct,
} from './validation/product'
import { validationError } from './middlewares/error'

const router = express.Router()

router.route('/products')
  .get(getAllProducts)
  .post(
    validateNewProduct,
    validationError,
    addProduct,
  )

router.route('/products/:id')
  .get(getProductById)
  .put(
    validateUpdateProduct,
    validationError,
    updateProductById,
  )
  .delete(removeProductById)

export default router
