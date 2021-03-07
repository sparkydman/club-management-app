const models = require('../../models');

module.exports = async (req, res) => {
  const users = await models.sequelize.query('SELECT * FROM users', {
    type: models.Sequelize.QueryTypes.SELECT,
  });

  res.status(200).json({
    sucess: true,
    data: users.map((user) => {
      delete user.password;
      return user;
    }),
  });
};
