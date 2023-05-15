const { ValidationError } = require('sequelize');

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(error, request, response, next) {
  console.log('errorHandler');
  response.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

function boomErrorHandler(error, request, response, next) {
  if (error.isBoom) {
    const { output } = error;
    response.status(output.statusCode).json(output.payload);
  } else {
    next(error);
  }
}

function ormErrorHanlder(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    });
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHanlder };
