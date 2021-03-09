const jwt = require('jsonwebtoken');
const models = require('../../models');
const { createTokens } = require('../../utils/jwt');
const ErrorResponse = require('../../utils/error-response');

module.exports = async (req, res) => {
  try {
    let cookie = req.headers.cookie;
    if (!cookie) {
      return res.status(400).json({
        success: false,
        error: new ErrorResponse(null, 'Token is required', 400),
      });
    }

    if (!cookie.startsWith('__refresh_token')) {
      return res.status(400).json({
        success: false,
        error: new ErrorResponse(null, 'Token is required', 400),
      });
    }

    cookie = cookie.split('=')[1];

    const decode = await jwt.verify(cookie, process.env.JWT_REFRESH_SECRET);
    const id = decode.user.id;
    const user = await models.sequelize.query(
      'SELECT * FROM users WHERE id = ?',
      {
        replacements: [id],
        type: models.Sequelize.QueryTypes.SELECT,
      }
    );
    if (!user[0]) {
      return res.status(400).json({
        success: false,
        error: new ErrorResponse(null, 'Invalid token', 400),
      });
    }
    const [generateAccessToken] = createTokens(
      user[0],
      process.env.JWT_ACCESS_SECRET,
      process.env.JWT_ACCESS_SECRET
    );
    res.status(200).json({ token: generateAccessToken });
  } catch (error) {
    // console.log(error);
    return res.status(400).json({
      success: false,
      error: new ErrorResponse(null, 'Server error', 500),
    });
  }
};
