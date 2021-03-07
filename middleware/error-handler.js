const ErrorResponse = require('../utils/error-response');

const handleError = (err, req, res, next) => {
  console.log(err);
  try {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return (err = handleUnniqueConstraintError(err, res));
    }
    if (err.name === 'SequelizeValidationError') {
      return (err = handleValidationError(err, res));
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: new ErrorResponse(null, 'Server error', 500),
    });
  }
};

const handleUnniqueConstraintError = (err, res) => {
  const message = Object.values(err.errors).map((error) => error.message);
  const path = Object.values(err.errors).map((error) => error.path);

  const error = new ErrorResponse(path, message, 400);
  res.status(400).json({
    success: false,
    error,
  });
};
const handleValidationError = (err, res) => {
  const message = Object.values(err.errors).map((error) => error.message);
  const path = Object.values(err.errors).map((error) => error.path);

  const error = new ErrorResponse(path, message, 400);
  res.status(400).json({
    success: false,
    error,
  });
};

module.exports = handleError;
