const models = require('../../models');

module.exports = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const user = await models.user.create({
    firstname,
    lastname,
    email,
    password,
  });
  res.status(200).json({ sucess: true, data: user });
};
