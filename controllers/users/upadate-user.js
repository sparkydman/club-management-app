const models = require('../../models');

module.exports = async (req, res) => {
  const { firstname, lastname } = req.body;
  const users = await models.sequelize.query(
    'UPDATE users SET firstname = :firstname, lastname = :lastname WHERE id = :id',
    {
      replacements: {
        firstname: firstname || req.user.firstname,
        lastname: lastname || req.user.lastname,
        id: req.user.id,
      },
      type: models.Sequelize.QueryTypes.UPDATE,
    }
  );

  res.status(200).json({
    sucess: true,
    data: users.map((user) => {
      delete user.password;
      return user;
    }),
  });
};
