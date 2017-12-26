import Joi from 'joi'

const newProduct = {
  body: {
    name: Joi.string().required(),
    price: Joi.number(),
  },
}

export {
  newProduct,
}
