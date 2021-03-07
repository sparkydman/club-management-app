const crypto = require('crypto');
const models = require('../../models');
const mailHandler = require('../../utils/mail-handler');

const generateInvitationToken = () => {
  const token = crypto.randomBytes(20).toString('hex');
  const invitationToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');
  return invitationToken;
};

module.exports = async (req, res) => {
  //   if (req.member) {
  //     return res.status(403).json({
  //       sucess: false,
  //       error: new ErrorResponse(null, 'User already a member of the club', 403),
  //     });
  //   }
  const { email } = req.body;
  const invitationToken = generateInvitationToken();
  await models.member.create({
    invitationToken,
    clubId: req.club.id,
    userId: req.user.id,
  });

  const emailBody = {
    from: `${req.user.firstname} ${req.user.lastname}`,
    to: email,
    subject: 'Club Invitation',
    text: `You are invited to join our great club. Follow this ${process.env.SITE_URL}/${req.club.id}/?invitation=${invitationToken}`,
  };
  mailHandler(emailBody);
  res.status(200).json({ success: true, data: 'Invitation sent' });
};
