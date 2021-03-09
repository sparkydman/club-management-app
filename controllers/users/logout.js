module.exports = (req, res) => {
  res.clearCookie('__refresh_token').redirect('/login');
};
