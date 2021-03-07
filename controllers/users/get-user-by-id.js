const models = require('../../models');
const ErrorResponse = require('../../utils/error-response');

module.exports = async (req, res, next, id) => {
  const user = await models.sequelize.query(
    'SELECT * FROM users WHERE id = ?',
    {
      replacements: [id],
      type: models.Sequelize.QueryTypes.SELECT,
    }
  );
  if (!user[0]) {
    return res.status(404).json({
      sucess: false,
      error: new ErrorResponse(null, 'User not found', 404),
    });
  }
  delete user[0].password;
  req.profile = user[0];
  next();
};
