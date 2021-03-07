const bcyrpt = require('bcrypt');
const models = require('../../models');
const ErrorResponse = require('../../utils/error-response');
const { createTokens } = require('../../utils/jwt');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const user = await models.sequelize.query(
    'SELECT * FROM users WHERE email = ?',
    {
      replacements: [email],
      type: models.Sequelize.QueryTypes.SELECT,
    }
  );
  if (!user[0]) {
    return res.status(404).json({
      sucess: false,
      error: new ErrorResponse(null, 'Invalid credential', 404),
    });
  }
  const isUser = await bcyrpt.compare(password, user[0].password);
  if (!isUser) {
    return res.status(404).json({
      sucess: false,
      error: new ErrorResponse(null, 'Invalid credential', 404),
    });
  }
  delete user[0].password;
  const [generateAccessToken, generateRefreshToken] = createTokens(
    user[0],
    process.env.JWT_ACCESS_SECRET,
    process.env.JWT_REFRESH_SECRET
  );

  user[0].token = generateAccessToken;

  res
    .cookie('refresh-token', generateRefreshToken, {
      domain: '/',
      maxAge: 60 * 60 * 24 * 7 * 1000,
      httpOnly: true,
      sameSite: true,
      secure: process.env.NODE_ENV !== 'development' ? true : false,
    })
    .status(200)
    .json({ sucess: true, data: user[0] });
};
