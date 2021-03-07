const models = require('../../models');
const ErrorResponse = require('../../utils/error-response');

module.exports = async (req, res) => {
  const { invitationToken } = req.params;
  const getClub = await models.sequelize.query(
    'SELECT id from clubs WHERE invitationToken = ?',
    {
      replacements: [invitationToken],
      type: models.Sequelize.QueryTypes.SELECT,
    }
  );
  if (!getClub[0]) {
    return res.status(403).json({
      success: false,
      error: new ErrorResponse(null, 'Invalid invitation request', 403),
    });
  }
  const club = await models.sequelize.query(
    'UPDATE member SET active = :active WHERE clubId = :clubId',
    {
      replacements: {
        active: true,
        clubId: getClub[0],
      },
      type: models.Sequelize.QueryTypes.UPDATE,
    }
  );

  res.status(200).json({ success: true, data: club });
};
