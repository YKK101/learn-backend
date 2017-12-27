import {
  invalidField,
  missingField,
} from '../utils/errorMessage'

const validateNewProduct = (req, res, next) => {
  req.checkBody({
    name: {
      exists: {
        errorMessage: missingField('name'),
      },
      notEmpty: {
        errorMessage: invalidField('name'),
      },
    },
    price: {
      exists: {
        errorMessage: missingField('price'),
      },
      isFloat: {
        options: { min: 0 },
        errorMessage: invalidField('price'),
      },
    },
  })

  next()
}

const validateUpdateProduct = (req, res, next) => {
  req.checkBody({
    name: {
      notEmpty: {
        errorMessage: invalidField('name'),
      },
      optional: {},
    },
    price: {
      isFloat: {
        options: { min: 0 },
        errorMessage: invalidField('price'),
      },
      optional: {},
    },
  })

  next()
}

export {
  validateNewProduct,
  validateUpdateProduct,
}
