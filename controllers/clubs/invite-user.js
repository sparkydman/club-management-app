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
  const WEB_URL =
    process.env.NODE_ENV === 'production'
      ? process.env.SITE_URL
      : 'http://localhost:8000';

  const emailBody = {
    from: `${req.user.firstname} ${req.user.lastname}`,
    to: email,
    subject: 'Club Invitation',
    html: `<div style="text-align:center"><p>You are invited to join our great club </p>
    <a style="background-color:black;color:white;padding: 10px 30px" href='${WEB_URL}/${req.club.id}/?invitation=${invitationToken}' target='_black'>Join </a>
    <p>Or copy this link to your browser ${WEB_URL}/${req.club.id}/?invitation=${invitationToken}</p>
    </div>`,
  };
  mailHandler(emailBody);
  res.status(200).json({ success: true, data: 'Invitation sent' });
};
