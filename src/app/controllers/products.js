import axios from 'axios'

// Create
const getAllProducts = (req, res) => {
  res.send('Get all products')
}

const getProductById = (req, res) => {
  res.send(`Get product id = ${req.params.id}`)
}

// Update
const addProduct = (req, res) => {
  res.send(`
    Add new product\n
    ${JSON.stringify(req.body, null, 4)}
  `)
}

const updateProductById = (req, res) => {
  res.send(`
    Update product id = ${req.params.id}\n
    ${JSON.stringify(req.body, null, 4)}
  `)
}

// Delete
const removeProductById = (req, res) => {
  res.send(`Remove product id = ${req.params.id}`)
}

export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  removeProductById,
}
