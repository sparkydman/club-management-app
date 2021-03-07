const models = require('../../models');

module.exports = async (req, res) => {
  await models.sequelize.query('DELETE FROM clubs WHERE id = ?', {
    replacements: [req.club.id],
    type: models.Sequelize.QueryTypes.DELETE,
  });
  res.status(200).json({ sucess: true, data: 'Club deleted' });
};
