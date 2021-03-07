const models = require('../../models');

module.exports = async (req, res) => {
  await models.sequelize.query('DELETE FROM users WHERE id = ?', {
    replacements: [req.user.id],
    type: models.Sequelize.QueryTypes.DELETE,
  });
  res.status(200).json({ sucess: true, data: 'User deleted' });
};
