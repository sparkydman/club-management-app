const jwt = require('jsonwebtoken');

const createTokens = (user, accessSecret, refreshSecret) => {
  const generateAccessToken = jwt.sign(
    {
      user: {
        id: user.id,
        email: user.email,
      },
    },
    accessSecret,
    {
      expiresIn: '1h',
    }
  );
  const generateRefreshToken = jwt.sign(
    {
      user: {
        id: user.id,
        email: user.email,
      },
    },
    refreshSecret,
    {
      expiresIn: '1h',
    }
  );

  return [generateAccessToken, generateRefreshToken];
};

module.exports = { createTokens };
