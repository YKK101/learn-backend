const validationError = (err, req, res, next) => {
  const unvalidates = err.errors
  if (unvalidates) {
    const errorPointer = unvalidates.reduce((fullText, unvalidate) => {
      const space = fullText === '' ? '' : ', '
      return `${fullText}${space}${unvalidate.field}`
    }, '')

    res.status(400).json({
      code: 422,
      message: 'Unprocessable Entity',
      description: `invalid field [ ${errorPointer} ]`,
    })
  }

  next()
}

export {
  validationError,
}
