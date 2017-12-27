const validationError = (req, res, next) => {
  req.getValidationResult()
    .then((result) => {
      result.throw()
      next()
    })
    .catch((error) => {
      const errorObject = error.array()
      const { msg } = errorObject[0]
      res.status(422).json({
        code: 422,
        message: 'Unprocessable Entity',
        description: msg,
      })
    })
}

export {
  validationError,
}
