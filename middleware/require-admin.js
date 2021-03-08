const ErrorResponse = require('../utils/error-response');

module.exports = (req, res, next) => {
  if (req.user.id !== req.club.admin) {
    return res.status(403).json({
      success: false,
      error: new ErrorResponse(
        null,
        'You are not authorized to perform this function',
        403
      ),
    });
  }
  next();
};
