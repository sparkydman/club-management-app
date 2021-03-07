const ErrorResponse = require('../utils/error-response');

module.exports = (req, res, next) => {
  if (req.user.id !== req.club.admin) {
    return res.status(401).json({
      success: false,
      error: new ErrorResponse(
        null,
        'You are not authorized to perform this function',
        401
      ),
    });
  }
  next();
};
