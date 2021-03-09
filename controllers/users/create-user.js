const models = require('../../models');
const { createTokens } = require('../../utils/jwt');

module.exports = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const user = await models.user.create({
    firstname,
    lastname,
    email,
    password,
  });
  delete user.password;
  const [generateAccessToken, generateRefreshToken] = createTokens(
    user,
    process.env.JWT_ACCESS_SECRET,
    process.env.JWT_REFRESH_SECRET
  );

  user.token = generateAccessToken;

  res
    .cookie('__refresh_token', generateRefreshToken, {
      maxAge: 60 * 60 * 24 * 7 * 1000,
      httpOnly: true,
      sameSite: true,
      secure: process.env.NODE_ENV === 'development' ? false : true,
    })
    .status(200)
    .json({ sucess: true, data: user });
};
