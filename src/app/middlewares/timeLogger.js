const timeLogger = (req, res, next) => {
  console.log(`Time : ${Date.now()}`)
  next()
}

export {
  timeLogger,
}
