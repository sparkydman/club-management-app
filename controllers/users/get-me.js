module.exports = async (req, res) => {
  res.status(200).json({
    sucess: true,
    data: req.user,
  });
};
