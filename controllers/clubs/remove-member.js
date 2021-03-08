const models = require('../../models');

module.exports = async (req, res) => {
  await models.sequelize.query('DELETE FROM member WHERE userId = ?', {
    replacements: [req.params.memberId],
    type: models.Sequelize.QueryTypes.DELETE,
  });
  res.status(200).json({ sucess: true, data: 'member removed' });
};
