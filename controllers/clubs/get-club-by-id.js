const models = require('../../models');
const ErrorResponse = require('../../utils/error-response');

module.exports = async (req, res, next, id) => {
  const club = await models.sequelize.query(
    'SELECT * FROM clubs WHERE id = ?',
    {
      replacements: [id],
      type: models.Sequelize.QueryTypes.SELECT,
    }
  );
  if (!club[0]) {
    return res.status(404).json({
      sucess: false,
      error: new ErrorResponse(null, 'Club not found', 404),
    });
  }
  req.club = club[0];
  next();
};
