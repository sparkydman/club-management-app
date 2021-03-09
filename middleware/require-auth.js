const jwt = require('jsonwebtoken');
const { QueryTypes } = require('sequelize');
const models = require('../models');
const ErrorResponse = require('../utils/error-response');

module.exports = async (req, res, next) => {
  try {
    let token = req.headers['authorization'];
    if (!token || !token.startsWith('Bearer')) {
      return res.status(401).json({
        success: false,
        error: new ErrorResponse(null, 'Access token is required', 401),
      });
    }
    token = token.split(' ')[1];
    const decode = await jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const user = await models.sequelize.query(
      'SELECT * FROM users WHERE id = ?',
      { replacements: [decode.user.id], type: QueryTypes.SELECT, raw: true }
    );
    if (!user[0]) {
      return res.status(401).json({
        success: false,
        error: new ErrorResponse(null, 'Access token is not valid', 401),
      });
    }
    req.user = user[0];
  } catch (err) {
    // console.log(err);
    res.status(401).json({
      success: false,
      error: new ErrorResponse(null, 'Access token is not valid', 401),
    });
  }
  next();
};
