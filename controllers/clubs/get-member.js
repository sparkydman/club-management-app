const models = require('../../models');

module.exports = async (req, res, next) => {
  const member = await models.sequelize.query(
    'SELECT * FROM member WHERE userId = ?',
    {
      replacements: [req.params.userId],
      type: models.Sequelize.QueryTypes.SELECT,
    }
  );
  if (member[0]) {
    req.member = member[0];
  }
  next();
};
