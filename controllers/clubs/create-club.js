const models = require('../../models');

module.exports = async (req, res) => {
  const { name } = req.body;
  //   const result = await models.sequelize.transaction(async (transaction) => {
  const club = await models.club.create({ name, admin: req.user.id });
  // const member = await models.member.create(
  //   {
  //     clubId: club.dataValues.id,
  //     userId: req.user.id,
  //   },
  //   { transaction }
  // );
  // console.log(member);
  //     return club;
  //   });
  res.status(200).json({ sucess: true, data: club });
};
